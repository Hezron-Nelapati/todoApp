import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const wHeight = Dimensions.get('screen').height
const wWidth = Dimensions.get('screen').width

const RowCard = ({name, title, count}) => {
    return (
        <View style={styles.reminderCard}>
                {
                    //code for inside component
                }
                <View style={styles.rowCard}>
                    <View style={styles.rowCardUpper}>
                        <Icon 
                            name={name}
                            size={30}
                            color='#f85f6a'
                        />
                        <Text style={styles.rCUText}>
                            {count}
                        </Text>
                    </View>
                    <View style={styles.rowCardLower}>
                        <Text style={styles.rCLText}>{title}</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    reminderCard: {
        elevation: 10,
        height: 100,
        backgroundColor: 'white',
        width: (wWidth/2)-40,
        borderRadius: 20,
        padding: 10
    },
    rowCard: {
        justifyContent: 'space-between',
        padding: 10
    },
    rowCardUpper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowCardLower: {
        marginTop: 5
    },
    rCUText: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    rCLText: {
        fontSize: 17,
        color: '#989eb1',
        fontWeight: 'bold'
    }
})

export default RowCard;