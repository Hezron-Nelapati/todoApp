import React from 'react';
import {View, Text, FlatList} from 'react-native';

const ListScreen = ({ route }) => {
    console.log(route.params)
    return <View> 
        <Text>hi</Text>
    </View>
}

export default ListScreen;
