import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native'
import {  getMembers } from '../../services/membersService'


const GMScreen = ({ navigation }) => {

    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)

    // ComponentDidMount 
    useEffect(() => {
        getMembers()
        .then(res => {
            setMembers(res.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <View
            style={styles.container}
        >
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        navigation.navigate('AddMember')
                    }}
                >
                    <Text 
                        style={styles.btnTxt}
                    >Add Member</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    loading ? (
                        <ActivityIndicator size='large' color="#000" />
                    ) : members.map(e => (
                        <TouchableHighlight 
                            style={{
                                marginTop: 10,
                            }}
                            onPress={() => {
                                navigation.navigate('MemberDetails',{
                                    currentMember: e
                                })
                            }}
                            key={e._id}
                         >
                            <Text 
                                style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                    textAlign: 'center'
                                }}
                            >{e.firstname}</Text>
                        </TouchableHighlight>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default GMScreen

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
