import createDataContext from './createDataContext';
import {navigate} from '../navigationRef';
import  {getStore, fireStore} from '../api/Firebase';


//import {StackActions} from '@react-navigation/native';
import moment from 'moment';

const todoReducer = (state, action) => {
    switch(action.type){
        case 'delete_todo':
            return state.filter((todo) => {
                return todo.id != action.payload
            })
        case 'edit_todo':
            return state.map((todo) => {
                return todo.id === action.payload.id ? action.payload : todo;
            })
        case 'get_todo':
            return action.payload
        default:
            return state;
    }
}

const getTodo = dispatch => async() => {
    //console.log('Calling../\../\..');
    console.log('Function Rendered')
    await getStore.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
            const Date = (doc.data().date).toDate();
            //console.log(doc.data())
            const Time = (doc.data().time).toDate();
            //console.log(Date +" "+moment(Date).format());
            //console.log('Time '+moment(time).format("LT"));
            //const Mdate = moment(doc.data().date).format("LL").toString()
            //console.log('Mdate '+Mdate);
            //const Mtime = moment(Time).format("LT").toString()
            //console.log('Date '+Date+"Time "+Time)
            //console.log('Test '+new Date(Date.now()))
            //console.log('Data '+doc.data())
            //console.log("Getting "+(doc.data().date).toDate()+" "+(doc.data().time).toDate())
            list.push({
                id: doc.id,
                title: doc.data().title,
                status: doc.data().status,
                date: moment(Date).format("LL").toString(),
                time: moment(Time).format("LT").toString(),
                Edate: Date.toString(),
                Etime: Time.toString(),
                day: doc.data().day
            })
            //console.log(list);
            // const data = {...doc.data(), id:doc.id}
            // list={...list, data }
        })
        dispatch({type: 'get_todo', payload: list})
    })
    //return null
    //console.log('list'+response);
    //dispatch({type: 'get_todo', payload: response.data})
}

const addTodo = dispatch => async(title, date, time, day, status) => {
    console.log("Adding "+date+"  "+time)
    await fireStore.add({
        title,
        date,
        time,
        day,
        status
    });
    navigate('Dashboard')
    //return subscriber;
    //console.log(response);
    //dispatch({type: 'get_todo', payload: response.data})
}

const deleteTodo = dispatch => async(id) => {
    //console.log(id)
    await fireStore.doc(id).delete();
    //navigate('Todo')
    dispatch({type: 'delete_todo', payload: id})
    //return subscriber;
    //subscriber();
}

const editTodo = dispatch => async(id, title, date, time, day, status) => {
    //console.log(id)
    await fireStore.doc(id).update({
        title: title,
        date: date,
        time: time,
        status: status,
        day: day
    });
    //dispatch({type: 'edit_todo', payload: id})
    //const popAction = StackActions.pop(1);
    navigate('Dashboard')
    //return subscriber
    //console.log(response);
}
export const {Provider, Context} = createDataContext(
    todoReducer,
    {addTodo, deleteTodo, editTodo, getTodo},
    []
);
