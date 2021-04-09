import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import React,{useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import PushNotification from 'react-native-push-notification'

import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as TodoProvider} from './src/context/TodoContext';
import {Provider as PaperProvider} from 'react-native-paper';
import { navigator } from './src/navigationRef';
import AccountScreen from './src/screens/AccountScreen';
import TodoScreen from './src/screens/TodoScreen';
import AddTodoScreen from './src/screens/AddTodoScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import EditTodoScreen from './src/screens/EditTodoScreen';
import WalkthroughScreen from './src/screens/WalkthroughScreen'

import Icon from 'react-native-vector-icons/MaterialIcons';
import TodoForm from './src/components/TodoForm';

// const HomeFlow = createDrawerNavigator({
//   Dashboard: DashboardScreen,
//   Account: AccountScreen
// },{});

// HomeFlow.navigationOptions = () => {
//   return {
//     headerShown: false
//   };
// }

// const DashboardFlow = createStackNavigator({
//   homeFlow: {screen: HomeFlow},
//   Add: {screen: AddTodoScreen},
//   Edit: {screen: EditTodoScreen}
// },{});

// AddTodoScreen.navigationOptions = () => {
//   return {
//       headerStyle: {
//           backgroundColor: 'rgb(248,248,248)',
//           elevation: 0
//       },
//       title: ''
//   };
// }

// DashboardFlow.navigationOptions = () => {
//   return {
//     title: 'Dashboard',
//     tabBarIcon: <Icon name= 'dashboard' size={28} color= '#f85f6a' />
//   }
// }

// // const TodoFlow = createStackNavigator({
// //   Todo: TodoScreen
// // },{});




// EditTodoScreen.navigationOptions = () => {
//   return {
//       headerStyle: {
//           backgroundColor: 'rgb(248,248,248)',
//           elevation: 0
//       },
//       title: ''
//   };
// }

// TodoFlow.navigationOptions = () => {
//   return {
//     title: 'Todo',
//     tabBarIcon: <Icon name= 'featured-play-list' size={28} color= '#f85f6a' />
//   }
// }

// const MainFlow = createBottomTabNavigator({
//   dashboardFlow: DashboardFlow,
//   todoFlow: TodoFlow
// },{
//   //initialRouteName: 'Account'
// });


// const switchNavigator = createSwitchNavigator({
//   ResolveAuth: ResolveAuthScreen,
//   loginFlow: createStackNavigator({
//     SignIn: SignInScreen,
//     SignUp: SignUpScreen
//   },{
//     initialRouteName: 'SignIn'
//   }),
//   Walkthrough: WalkthroughScreen,
//   mainFlow: MainFlow,
// },{
//     //initialRouteName: 'loginFlow'
// });
PushNotification.createChannel(
  {
    channelId: "83", // (required)
    channelName: "Local channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.// 
    playSound: true, //(optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.createChannel(
  {
    channelId: "84", // (required)
    channelName: "Scheduled channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.// 
    playSound: true, //(optional) default: true
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 5, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

const isLoggedIn = true;
const isFirstOpen = false;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeFlow = () => {
  return (
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen 
        name='Dashboard' 
        component={DashboardScreen}
        options={{header: ()=>{return;}}}
       />
      <Drawer.Screen 
        name='Account' 
        component={AccountScreen}
        options={{header: ()=>{return;}}}
      />
      <Drawer.Screen 
        name='History' 
        component={TodoScreen}
        options={{header: ()=>{return;}}}
      />
    </Drawer.Navigator>
  );
}
const DashboardFlow = () => {
  return (
    <Stack.Navigator initialRouteName='homeFlow'>
      <Stack.Screen 
        name='homeFlow' 
        component={HomeFlow} 
        options={{header: ()=>{return;}}}
      />
      <Stack.Screen name='Add' component={AddTodoScreen}/>
      <Stack.Screen name='Edit' component={EditTodoScreen}/>
    </Stack.Navigator>
  );
}

const LoginFlow = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen 
        name='SignIn' 
        component={SignInScreen} 
        options={{header: ()=>{return;}}}
      />
      <Stack.Screen 
        name='SignUp' 
        component={SignUpScreen}
        options={{header: ()=>{return;}}}
      />
    </Stack.Navigator>
  );
}
const MainFlow = () => {
  return (
    <Tab.Navigator initialRouteName='homeFlow'>
      <Tab.Screen 
        name='homeFlow' 
        component={HomeFlow}
        options={{
          title: 'Dashboard',
          tabBarIcon: () => <Icon name= 'dashboard' size={28} color= '#f85f6a' />
        }}
      />
      <Tab.Screen 
        name='Todo' 
        component={TodoScreen}
        options={{
          title: 'Todo',
          tabBarIcon: () => <Icon name= 'featured-play-list' size={28} color= '#f85f6a' />
        }}
      />
    </Tab.Navigator>
  );
}

const RootFlow = () => {
  return (
    <>
     { isLoggedIn ?
        (isFirstOpen ? <WalkthroughScreen /> : <MainFlow />) : 
        (<LoginFlow />)
     }
    </>
  )
}

const App = () => { 
    
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }

    
  
    useEffect(async() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    return ( 
      <SafeAreaProvider>
        <NavigationContainer ref={navigator}>
        <>
          { user ?
            (isFirstOpen ? <WalkthroughScreen /> : <DashboardFlow />) : 
            (<LoginFlow />)
          }
        </>
          </NavigationContainer>
      </SafeAreaProvider>
    )
};

export default () => {
  return (
    <AuthProvider>
      <TodoProvider>
        <PaperProvider>
          <App/>
        </PaperProvider>
      </TodoProvider>
    </AuthProvider>
  );
};