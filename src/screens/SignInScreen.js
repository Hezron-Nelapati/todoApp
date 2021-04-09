import React, { useContext } from 'react';
import { View, StyleSheet, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Platform } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import {NavigationEvents} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignInScreen = ({navigation}) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
        >
        <View style={{flex:1, backgroundColor: 'white'}} forceInset={{top: 'always'}}>
             <AuthForm 
                    header='Sign In'
                    errorMessage={state.errorMessage}
                    onSubmit={signin}
                    nav={navigation}
                    navText='SignUp'
                    action='Sign In'
                    text='Sign Up'
                />
        </View>
        </KeyboardAvoidingView>
    );
}

const styles =StyleSheet.create({
    signin: {
        flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center'
    },
    goto: {
        marginLeft: 20,
        color: 'rgb(0,70,255)',
        marginTop: 16
    }
})

export default SignInScreen