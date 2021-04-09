import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import moment from 'moment';

const DateHook = () => {
    const [date, setDate] = useState(moment().format('MMM Do, h:mm:ss a'));
    useEffect(() => {   
        setDate(moment().format('Do MMMM, dddd'))
    })
    
    return (
        <View>
            <Text style={{fontSize: 18, paddingLeft: 5}}>{date}</Text>
        </View>
    );
}

export default DateHook;
