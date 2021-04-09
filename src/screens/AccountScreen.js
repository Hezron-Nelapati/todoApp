import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    //console.log(state)
    var mail =  auth().currentUser.email.toString()
    //console.log(mail)
    const userName = mail.replace('@gmail.com', '')
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <Icon 
                name='account-circle'
                size={250}
                style={{textAlign: 'center', marginTop: 50, color: '#f85f6a'}}
            />
            <View style={{marginVertical: 20}} />
            <Text style={styles.text}>Name: {userName}</Text>
            <View style={{marginVertical: 5}} />
            <Text style={styles.text}>Email: {mail}</Text>
            <View style={{marginVertical: 5}} />
            <Text style={styles.text}>Active Since: </Text>
            <View style={{marginVertical: 5}} />
            <View style={{marginVertical: 40}} />
            <View >
                <Button 
                    title="Sign Out"
                    type="outline"
                    buttonStyle={{height: 55, borderWidth: 3, width: 200, alignSelf: 'center', borderColor: '#f85f6a', backgroundColor: 'white'}}
                    titleStyle={{fontWeight: '700'}}
                    containerStyle={{backgroundColor: 'rgb(248,248,248)'}}
                    onPress={signout}
                    icon={
                        <Icon 
                            name='logout'
                            size={30}
                            style={{marginRight: 10, color: '#f85f6a'}}
                        />
                    }
                />
            </View>
        </SafeAreaView>
    );
}

AccountScreen.navigationOptions =() => {
    return {
        title: 'Account',
        //tabBarIcon: <MaterialIcons name="account-circle" size={24} color="black"/>
    }
}

const styles =StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: 'rgb(248,248,248)'
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        color: 'rgb(120,120,120)'
    },
    button: {
        marginHorizontal: 70,
    }
})

export default AccountScreen;