import React, { useReducer, createContext } from 'react'
import AppReducer from './AppReducer';
import jwt_decode from 'jwt-decode';
import { login as auth } from '../services/authService';

const initialState =  {
    authenicated : false,
    role: '',
    
}

export const GlobalContext = createContext(initialState);



export default function GlobalProvider({ children }) {
    
    const [state, dispatch] = useReducer(AppReducer,initialState);
    

    const login = (email, password) => {
        auth(email, password)
        .then(res => {
            const token = res.data.token
            const decodedToken = jwt_decode(token)
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: decodedToken.role
            })
        })
        .catch(err => console.log(err))


    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                authenicated: state.authenicated,
                login,
                logout
            }}
        >
            {
                children
            }
        </GlobalContext.Provider>
    )

}