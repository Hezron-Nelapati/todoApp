import React, {useContext} from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Context as TodoContext} from '../context/TodoContext';
import TodoForm from '../components/TodoForm';
import moment from 'moment';

const EditTodoScreen = ({route}) => {
    const id = route.params?.id??0;
    const { state, editTodo } = useContext(TodoContext)

    const todo = state.find((todo) => todo.id == id);
    const initialValues = {
        title: todo.title,
        date: todo.Edate,
        time: todo.Etime,
        status: todo.status
    }
    console.log(todo.Edate);
    //console.log(moment(todo.date).toDate());
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
            <TodoForm 
                onSubmit={(title, date, time, status)=>{
                    const day = todo.day;
                    editTodo(id, title, date, time, day, status)
                }}
                initialValues={initialValues}
                forEdit={true}
            />            
        </SafeAreaView>
    );
}


export default EditTodoScreen;