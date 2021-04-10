import React, { useContext } from 'react';
import {Dimensions, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Context as TodoContext} from '../context/TodoContext';
import ListTRenderer from '../components/ListTRenderer';

const ListScreen = ({ route, navigation }) => {
    const {deleteTodo} = useContext(TodoContext);
    const wWidth = Dimensions.get('screen').width
    const {values} = route.params;
    //console.log(values)
    if(!values){
        return <SafeAreaView style={styles.empty_container}>
            <Text style={styles.text}>No Data Found</Text>
        </SafeAreaView>
    }
    return (<SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
                <ListTRenderer ListData={values} wWidth={wWidth} nav={navigation} delf={deleteTodo}/>
            </SafeAreaView>);
}

const styles =StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'rgba(200,190,200,0.3)',
        justifyContent: 'center'
    },
    text: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center'
    },
    empty_container: {
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: 'rgb(240,240,240)',
        justifyContent: 'center',
        opacity: 0.9
    },
})


export default ListScreen;
