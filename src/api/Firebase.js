import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import moment from 'moment';


if(!firebase.apps.length){
   const res = firebase.initializeApp();
   console.log('res')
   console.log(res);
}else{
   firebase.app();
}
   
        const userId = auth().currentUser.uid;

        console.log('userId '+userId);

        const Firestore = firestore();

        Firestore
            .collection('users')
            .doc(userId).set({
                id: userId
            })

        Firestore
            .collection('users')
            .doc(userId)
            .collection('todoApp')
            .doc('todos')
            .set({
                id: 0,
                title: 'test',
                status: 'completed',
                day: moment().format('dddd'),
                date: moment().format('LL'),
                time: moment().format('LT')
            });

        const fireStore = firestore()
                            .collection('users')
                            .doc(userId)
                            .collection('todoApp');

        const getStore = firestore()
                            .collection('users')
                            .doc(userId)
                            .collection('todoApp')
                            .where("title","!=","test");
    
    export {getStore, fireStore};

