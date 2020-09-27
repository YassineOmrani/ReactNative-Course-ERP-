import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import GMScreen from '../screens/Gestion/GMScreen'
import GTScreen from '../screens/Gestion/GTScreen'
import { FontAwesome } from '@expo/vector-icons'
import AddMemberScreen from '../screens/Gestion/AddMemberScreen'
import MemberDetails from '../screens/Gestion/MemberDetails'


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const GMStack = () => (
    <Stack.Navigator
        initialRouteName='GM'
    >
        <Stack.Screen name='GM' component={GMScreen} />
        <Stack.Screen name='AddMember' component={AddMemberScreen} />
        <Stack.Screen name='MemberDetails' component={MemberDetails} />
    </Stack.Navigator>
)




const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'GM') {
                        iconName = 'users';
                    } else if (route.name === 'GT') {
                        iconName = 'list';
                    }

                    // You can return any component that you like here!
                    return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#1998E2',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name='GM' component={GMStack} />
            <Tab.Screen name='GT' component={GTScreen} />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({})
