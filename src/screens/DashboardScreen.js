import React, {useEffect, useContext, useState, useCallback, useMemo} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import ListRenderer from '../components/ListRenderer';
import {Context as TodoContext} from '../context/TodoContext';
import {Context as AuthContext} from '../context/AuthContext';
import DateHook from '../components/DateHook';
import moment from 'moment';
import IosReminderTop from '../components/IosReminderTop';



const DashboardScreen = ({navigation}) => {
    //console.log(navigation)
    const {state, getTodo, deleteTodo} = useContext(TodoContext);
    
    const {state:{email}} = useContext(AuthContext);

    const [todayCount, setToday] = useState(0);
    const [scheduleCount, setSchedule] = useState(0);
    // const [todayList, setTodayList] = useState(null);
    // const [scheduleList, setScheduleList] =useState(null);

    console.log('Today '+todayCount+' Schedule'+scheduleCount);


    const stateValues = state.filter((item)=> item.day === moment().format('dddd'))

    
    useEffect(()=>{
        getTodo()
        const getToday = () => {
            const today = moment().format("LL").toString();
            var temp = [];
            for(var i=0; i<state.length; i++){
                if(state[i].date === today){
                    temp.push(state[i]);
                }
            }
            //setTodayList(temp);
            //console.log(temp)
            return temp.length;
        }

        const getSchedule = () => {
            var temp = [];
            const Sdate = moment().format('D').toString()
            const Smonth = moment().format('M').toString()
            const Syear = moment().format('YYYY').toString()

            const date = parseInt(Sdate);
            const month = parseInt(Smonth);
            const year = parseInt(Syear);




            for(var i=0; i<state.length; i++){
                //console.log(state[i])
                //console.log('=========')
                const Year = parseInt(moment(state[i].Edate).format('YYYY').toString());
                const Month = parseInt(moment(state[i].Edate).format('M').toString())
                const Date = parseInt(moment(state[i].Edate).format('D').toString())
                //console.log(date+' '+Date+' '+month+' '+Month+' '+year+' '+Year)

                if(Year >= year){
                    if(Month >= month){
                        if(Date > date){
                            temp.push(state[i])
                        }
                    }
                }
            }
            //setScheduleList(temp)
            return temp.length;
        }

        //console.log(state);
        const tcount = getToday();
        setToday(tcount);
        const scount = getSchedule();
        setSchedule(scount);

    },[state])

    const wHeight = Dimensions.get('screen').height
    const wWidth = Dimensions.get('screen').width
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
        <SafeAreaView style={{flex:1, backgroundColor: 'rgb(248,248,248)', paddingVertical: 10, paddingRight: 25, paddingLeft: 20}} forceInset={{top: 'always'}}>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginTop: 25}}>What's up, {email.toString().replace('@gmail.com', '')}</Text>
            <DateHook />
            {//<Text style={{fontSize: 14, color: '#989eb1', fontWeight: 'bold', marginTop: 20}}>STATISTICS</Text>
            }
            <View style={{marginTop: 10, marginHorizontal: 0}}>
                {//<Statistic values={values}/>
            }
                <IosReminderTop
                 today={todayCount}
                 schedule={scheduleCount}
                />
            </View>

            <Text style={{fontSize: 14, color: '#989eb1', fontWeight: 'bold', marginTop: 50, marginBottom: 15}}>TODAY'S TASKS</Text>
            <View style={{flex: 1}}>
                <ListRenderer ListData={stateValues} wWidth={wWidth} nav={navigation} delf={deleteTodo}/>
            </View>

            <View style={{ alignSelf: 'flex-end', position: 'absolute' ,marginTop: 40, paddingRight: 25}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Add')}>
                    <Icon
                        name='pluscircleo'
                        style={{backgroundColor: 'rgb(248,248,248)'}}
                        size={35}
                        color='#f85f6a'
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        </KeyboardAvoidingView>

    );
}

DashboardScreen.navigationOptions = () => {
    return {
        title: 'Dashboard',
        tabBarIcon:  <Icon name='' />
    };
}

const styles = StyleSheet.create({})

export default DashboardScreen;
