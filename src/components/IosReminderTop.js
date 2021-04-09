import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import RowCard from './RowCard';
import moment from 'moment';


    

const IosReminderTop = ({today, schedule}) => {
    
    return (
    <View style={styles.container}>
        <View style={styles.rowContainer}>
            <RowCard name="calendar-today" title="Today" count={today}/>
            <RowCard name="calendar-month-outline" title="Scheduled" count={schedule}/>
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