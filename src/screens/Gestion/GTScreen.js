import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { GlobalContext } from '../../context/AppState'

const GTScreen = ({ navigation }) => {

    
    const myContext = useContext(GlobalContext)  

    return (
        <View>
            <View>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text
                        style={styles.btnTxt}
                    >Add Task</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => myContext.logout()}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <FontAwesome name='sign-out' size={16} color="#fff" />
                        <Text
                            style={styles.btnTxt}
                        >Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
        </View>
    )
}

export default GTScreen

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
        marginTop: 48
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
