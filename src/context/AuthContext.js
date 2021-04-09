import createDataContext from './createDataContext';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload}
    case 'signin':
      return {errorMessage: '', user: action.payload.uid, email: action.payload.email}
    case 'clear_error_message':
      return {...state, errorMessage: ''}
    case 'signout':
      return {errorMessage: '', user: null, email: ''}
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
    try {
      const response = await auth().createUserWithEmailAndPassword(email, password);
      // console.log(response.data);
      //await AsyncStorage.setItem('ShowApp', 'false');
      // const val = await AsyncStorage.getItem('token')
      // console.log(`token in storage: ${val}`)
      dispatch({type: 'signin', payload: response.user})

      //selectScreen(false)
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        dispatch({type: 'add_error', payload: 'That email address is already in use!'})
      }
    }
  };

const signin = dispatch => async ({ email, password }) => {
    try {
      const response = await  auth().signInWithEmailAndPassword(email, password);
      //console(response.data)
      //await AsyncStorage.setItem('ShowApp', 'false');
      dispatch({type: 'signin', payload: response.user})
      //selectScreen(false)
    } catch(error) {
      if (error.code === 'auth/invalid-email') {
        dispatch({type: 'add_error', payload: 'That email address is invalid!'})
      }
    }
  };

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('User')
  await AsyncStorage.removeItem('Email')
  await auth().signOut();
  dispatch({type: 'signout'})

  //navigate('SignIn');
  };


export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout, signin, clearErrorMessage },
  { user: null, email: '', errorMessage: '' }
);
