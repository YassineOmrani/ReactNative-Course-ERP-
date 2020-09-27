import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MemberDetails = ({ navigation, route }) => {

    const [currentMember, setCurrentMember] = useState(null)

    useEffect(() => {
        setCurrentMember(route.params.currentMember)
    }, [])


    return (
        <View>
            {
                currentMember !== null && (
                    <Text>{ currentMember.firstname }</Text>
                )
            }
        </View>
    )
}

export default MemberDetails

const styles = StyleSheet.create({})
