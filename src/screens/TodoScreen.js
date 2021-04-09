import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListTRenderer from '../components/ListTRenderer';
import {Context as TodoContext} from '../context/TodoContext';
import PushNotification from 'react-native-push-notification'

const TodoScreen = ({navigation}) => {
    const {state, getTodo, deleteTodo} = useContext(TodoContext)
    const wWidth = Dimensions.get('screen').width

    

const testNotify = () => { PushNotification.localNotification({
        channelId: "83",
        title: "Local Notification", 
        message: "My Notification Message", 
        soundName: 'default', 
        actions: '["Yes", "No"]'
    })}
    //const onNotification = (notif) => {
    //     Alert.alert(notif.title, notif.message);
    // }

    // const handlePerm = (perms)=>{
    // Alert.alert("Permissions", JSON.stringify(perms));
    // }
    //configure()
    //const notification = configure(onNotification);

    //const {notification, setNotification} = useState(new NotificationService(onNotification));
    useEffect(() => {
        //localNotification;
        //scheduleNotification;
        //handlePerm;
        //checkPermission;
        const subscriber = getTodo();
    }, [])

    
    
    //console.log('state'+state)

    return(
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <ListTRenderer ListData={state} wWidth={wWidth} nav={navigation} delf={deleteTodo}/>
            <Button
                onPress={testNotify}
            />
        </SafeAreaView>
    );
}

const styles =StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        //paddingTop: 20,
        //paddingBottom: 10,
        flex: 1,
        backgroundColor: 'rgba(200,190,200,0.3)',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
    button: {
        paddingHorizontal: 30
    }
})

export default TodoScreen;