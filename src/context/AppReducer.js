export default (state, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authenicated: true,
                role: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                authenicated: false
            }

        default: 
            return state;
    }
}
