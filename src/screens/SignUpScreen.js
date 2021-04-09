import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';
import {NavigationEvents} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUpScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} forceInset={{top: 'always'}}>
            {//<NavigationEvents onWillBlur={clearErrorMessage}/>
            }<AuthForm 
                header='Sign Up'
                errorMessage={state.errorMessage}
                onSubmit={signup}
                nav={navigation}
                navText='SignIn'
                text='Sign In'
                action={null}
            />
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({})

export default SignUpScreen;