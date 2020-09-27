import React, { useContext, useState } from 'react'
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native'
import { GlobalContext } from '../../context/AppState'
import  login from '../../services/authService'
import jwt_decode from "jwt-decode";


const LoginScreen = ({navigation, route}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError ] = useState('');

    const [error,  setError] = useState(false);


    const { login } = useContext(GlobalContext);


    const isFormValid =() => {
        if (email.length == 0) {
            setEmailError('please enter email !!')
        } else {
            setEmailError('')
        }  

        if ( password.length == 0 ) {
            setPasswordError('Please enter password !!')

        } else {
            setPasswordError('')
        }
        // Condition where form is valid
        if (emailError == '' && passwordError == '') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        login(email, password)
    }


    return (
        <View
            style={styles.container}
        >  
            <TextInput
                placeholder="Email"
                style={styles.textInput}
                value={email}
                onChangeText={(txt) => {
                    setEmail(txt)
                    
                }}
             />
             {
                 emailError != '' && (
                    <Text
                        style={styles.errorText} 
                     >
                        {
                            emailError
                        }
                     </Text>
                 )
             }
            <TextInput 
                placeholder="Password"
                style={styles.textInput}
                secureTextEntry={true}
                value={password}
                onChangeText={(txt) => {
                    setPassword(txt)
                }}
            />
            {
                 passwordError != '' && (
                    <Text
                        style={styles.errorText} 
                     >
                        {
                            passwordError
                        }
                     </Text>
                 )
             }
            <TouchableHighlight
                style={styles.btn}
                onPress={() => handleSubmit()}
            >
                <Text
                    style={styles.btnTxt}
                >Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
                underlayColor="#fff"
                onPress={() => {
                    navigation.navigate('ForgetPassword')
                }}
            >
                <Text
                    style={styles.forgetTxt}
                >Forget password ?</Text>
            </TouchableHighlight>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 63,
        backgroundColor: '#fff',
        height: '100%'
    },
    textInput: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 16,
        height: 50,
        marginVertical: 16,
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        paddingHorizontal: 5
    },
    btn: {
        backgroundColor: '#2F80ED',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginTop: 167
    },
    btnTxt: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#fff'
    },
    txt: {
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 30,
        lineHeight: 36
    },
    forgetTxt: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#2F80ED',
        marginVertical: 16
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '100'
    }
})

