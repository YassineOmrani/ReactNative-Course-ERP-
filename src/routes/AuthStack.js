import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/auth/LoginScreen'
import ForgetPasswordScreen from '../screens/auth/ForgetPasswordScreen'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen  name="Login" component={LoginScreen} />
            <Stack.Screen  name="ForgetPassword" component={ForgetPasswordScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack


