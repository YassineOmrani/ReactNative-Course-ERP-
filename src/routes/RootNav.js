import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import TabNav from './TabNav'
import { GlobalContext } from '../context/AppState'

const RootNav = () => { 

    const { authenicated } = useContext(GlobalContext);

    return (
        <NavigationContainer>
            {
                authenicated ? 
                <TabNav /> :
                <AuthStack />
            }
        </NavigationContainer>
    )
}

export default RootNav

