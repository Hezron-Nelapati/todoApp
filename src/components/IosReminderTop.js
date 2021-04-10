import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import RowCard from './RowCard';
import moment from 'moment';


    

const IosReminderTop = ({today, schedule, navigation, todayValues, scheduledValues}) => {
    
    return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate('List', {values: todayValues})}
            >
                <RowCard name="calendar-today" title="Today" count={today}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('List', {values: scheduledValues})}
            >
                <RowCard name="calendar-month-outline" title="Scheduled" count={schedule}/>
            </TouchableOpacity>  
        </View>
    </View>
    );
}

const styles =StyleSheet.create({
    container: {},
    rowContainer: {
        flexDirection: 'row',
    justifyContent: 'space-around'
    },
    
})
export default IosReminderTop;