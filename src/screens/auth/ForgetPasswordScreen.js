import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'

const ForgetPasswordScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                placeholder="Enter your email please"
                style={styles.textInput}
            />
            <TouchableHighlight
                style={styles.btn}
            >
                <Text
                    style={styles.btnTxt}
                >Submit</Text>
            </TouchableHighlight>
        </View>
    )
}

export default ForgetPasswordScreen

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
        marginTop: 24
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
