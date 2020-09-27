import { Picker } from '@react-native-community/picker'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput,ScrollView, Button,TouchableHighlight } from 'react-native'
import * as Yup from 'yup'
import { addMember } from '../../services/membersService'

const AddMemberScreen = ({ navigation }) => {

    const initValues = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        gender: "",
        birthday: new Date(),
        level: "",
        since: "",
        department: "",
    };


    const validationSchema = Yup.object({
        firstname: Yup.string().min(3).required(),
        lastname: Yup.string().min(3).required(),
        email: Yup.string().email().required(),
        phone: Yup.string().min(8).required(),
        password: Yup.string().min(8).required(),
        gender: Yup.string().required(),
        // birthday: new Date(),
        level: Yup.string().required(),
        since: Yup.string().required(),
        department: Yup.string().required(),
    });

    const departments = [
        {
            id: 0,
            name: 'COM'
        },
        {
            id: 1,
            name: 'PROJET'
        },
        {
            id: 2,
            name: 'DEV COMM'
        },
        {
            id: 3,
            name: 'RELATION EXT'
        }
    ]

    const levels = [
        {
            id: 0,
            name: '1-ING'
        },
        {
            id: 1,
            name: '2-ING'
        },
        {
            id: 2,
            name: '3-ING'
        }
    ]

    const genders = [
        {
            id: 0,
            name: 'Male'
        },
        {
            id: 1,
            name: 'Female'
        },
        {
            id: 2,
            name: 'Other'
        }
    ]
    
    const insertMember = (values) => {
        addMember(values)
        .then(res => {
            console.log(res.data)
            navigation.navigate('GM');
        })
        .catch((err ) => console.log(err))
    }


    return (
        <Formik
            initialValues={initValues}
            onSubmit={(values) => insertMember(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <ScrollView>
                    <TextInput
                        onChangeText={handleChange('firstname')}
                        onBlur={handleBlur('firstname')}
                        style={styles.textInput}
                        placeholder="firstname"
                        value={values.firstname}
                    />
                    <Text
                        style={styles.errorText}
                    >
                        { errors.firstname }
                    </Text>
                    <TextInput
                        onChangeText={handleChange('lastname')}
                        onBlur={handleBlur('lastname')}
                        style={styles.textInput}
                        placeholder="lastname"
                        value={values.lastname}
                    />
                    <Text
                        style={styles.errorText}
                    >
                        {errors.lastname}
                    </Text>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        style={styles.textInput}
                        placeholder="Email"
                        keyboardType='email-address'
                        value={values.email}
                    />
                    <Text
                        style={styles.errorText}
                    >
                        { errors.email }
                    </Text>
                    <TextInput
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder="phone"
                        value={values.phone}
                    />
                    <Text
                        style={styles.errorText}
                    >
                        { errors.phone }
                    </Text>
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholder="password"
                        value={values.password}
                    />
                    {
                        errors.password && (
                        <Text
                            style={styles.errorText}
                        >
                            { errors.password }
                        </Text>
                        )
                    }
                    <TextInput
                        onChangeText={handleChange('since')}
                        onBlur={handleBlur('since')}
                        style={styles.textInput}
                        keyboardType='number-pad'
                        placeholder="since"
                        value={values.since}
                    />
                    <Text
                        style={styles.errorText}
                    >
                        { errors.since }
                    </Text>
                    <Picker
                        style={styles.picker}
                        onValueChange={handleChange('department')}
                        selectedValue={values.department}
                    >
                        <Picker.Item label="Choose a Departement !"  value="" />
                        {
                            departments.map(e => (
                                <Picker.Item key={e.id} value={e.name} label={e.name} />
                            ))
                        }
                    </Picker>
                    <Text
                        style={styles.errorText}
                    >
                        { errors.department }
                    </Text>
                    <Picker
                        style={styles.picker}
                        onValueChange={handleChange('gender')}
                        selectedValue={values.gender}
                    >
                        <Picker.Item label="gender !" value="" />
                        {
                            genders.map(e => (
                                <Picker.Item key={e.id} value={e.name} label={e.name} />
                            ))
                        }
                    </Picker>
                    <Text
                        style={styles.errorText}
                    >
                        { errors.gender }
                    </Text>
                    <Picker
                        style={styles.picker}
                        onValueChange={handleChange('level')}
                        selectedValue={values.level}
                    >
                        <Picker.Item label="your level !" value="" />
                        {
                            levels.map(e => (
                                <Picker.Item key={e.id} value={e.name} label={e.name} />
                            ))
                        }
                    </Picker>
                    <Text
                        style={styles.errorText}
                    >
                        { errors.level }
                    </Text>
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={handleSubmit}
                    >
                        <Text
                            style={styles.btnTxt}
                        >Submit</Text>
                    </TouchableHighlight>
                </ScrollView>
            )}
        </Formik>
    )
}

export default AddMemberScreen

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#fff',
        height: '100%',
    },
    textInput: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 32,
        height: 50,
        marginVertical: 16,
        color: '#BDBDBD',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        paddingHorizontal: 5,
    },
    picker: {
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 32,
        height: 50,
        marginVertical: 16,
        color: '#BDBDBD',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        paddingHorizontal: 5,
    },
    btn: {
        backgroundColor: '#2F80ED',
        borderRadius: 100,
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 32,
        paddingVertical: 16,
        marginHorizontal: 32,

    },
    btnTxt: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#fff'
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '100'
    }

})
