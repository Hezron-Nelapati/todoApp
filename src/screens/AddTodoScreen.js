import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Context as TodoContext} from '../context/TodoContext';
import TodoForm from '../components/TodoForm';
import moment from 'moment';
import {scheduleNotification} from '../../NotificationService';

const AddTodoScreen = ({navigation}) => {
    const { addTodo } = useContext(TodoContext)
    return (
        <SafeAreaView  style={{backgroundColor: 'rgb(248,248,248)', flex: 1}} forceInset={{top: 'always'}}>
                <TodoForm 
                    onSubmit={(title, date, time)=>{
                        const status = 'created'
                        const day = moment().format('dddd')
                        //console.log(title+" "+date+" "+time)
                        addTodo(title, date, time, day, status)
                        scheduleNotification(date, time, title)
                    }}
                    forEdit={false}
                />
        </SafeAreaView>
    );
}



export default AddTodoScreen;