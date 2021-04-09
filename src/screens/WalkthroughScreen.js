import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
    

const WalkthroughScreen = ({navigation}) => {

    const onComplete = async () => {
        await AsyncStorage.setItem('ShowApp', "true");
        navigation.navigate('Dashboard');
    }

    const wHeight = Dimensions.get('screen').height
    const wWidth = Dimensions.get('screen').width

    return (
        <View style={{height: wHeight, width: wWidth, flex: 1, backgroundColor: '#f85f6a', justifyContent: 'center'}}>
            <View style={{}}>
                <Text style={{textAlign: 'center', fontSize: 25, color: 'white'}}>Hii Welcome to TODO App</Text>
                <View style={{height: 300}}/>
                <Button 
                    title="Let's go"
                    type="outline"
                    buttonStyle={{height: 55, borderWidth: 3, width: 200, alignSelf: 'center', borderColor: '#f85f6a', backgroundColor: '#f85f6a', color: 'white'}}
                    titleStyle={{fontWeight: '700'}}
                    containerStyle={{backgroundColor: '#f85f6a', color: 'white'}}
                    onPress={onComplete}
                    titleStyle={{color: 'white'}}
                />
            </View>
        </View>
    );
}

export default WalkthroughScreen;