import React, {useState} from 'react';
import {Input, Button, CheckBox} from 'react-native-elements';
import {Text, TextInput ,View, StyleSheet, TouchableOpacity, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const TodoForm = ({ onSubmit, initialValues, forEdit}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [date, setDate] = useState(initialValues.date);
    const [time, setTime] = useState(initialValues.time);
    const [status, setStatus] = useState(initialValues.status);
    const [isDatePVisible, setIsDatePVisible] = useState(false);
    const [isTimePVisible, setIsTimePVisible] = useState(false);

    const wHeight = Dimensions.get('screen').height
    const wWidth = Dimensions.get('screen').width

    //console.log('date '+date+' time'+time);

    //For Date
    const showDatePicker = () => {
        //console.log('Opening Date')
        setIsDatePVisible(true);
      };

    const hideDatePicker = () => {
        //console.log('Hiding Date')
        setIsDatePVisible(false);
    };
    
    const handleDateConfirm = (selectedDate) => {
        //console.log("A date has been picked: ", selectedDate);
        const Date = selectedDate//.format("LL")//.toString();
        //console.log("Formatted "+Date);
        setDate(Date);
        hideDatePicker();
    };
        //For Time
    const showTimePicker = () => {
        setIsTimePVisible(true);
    };

    const hideTimePicker = () => {
        setIsTimePVisible(false);
    };
    
    const handleTimeConfirm = (selectedTime) => {
        //console.log("A time has been picked: ", selectedTime);
        const Time = selectedTime//.format("LT").toString();
        //console.log("Time "+Time);
        setTime(Time);
        //const fime = moment(time).format("LT")
        //const seval = moment(date);
        //console.log(seval);
        hideDatePicker();
    };

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView 
                    style={{paddingHorizontal: 30,paddingTop: 10, backgroundColor: 'rgb(200,200,200)', flex: 1 }} 
                    showsVerticalScrollIndicator={false}
                >
                        <Input 
                            label='Add Task'
                            labelStyle={{fontSize: 25, fontWeight: 'normal', color: '#f85f6a', paddingLeft: 5}}
                            inputContainerStyle={styles.inputStyle}
                            containerStyle={{ backgroundColor: 'white', elevation: 8, borderRadius: 20, paddingTop: 20}}
                            value={title}
                            onChangeText={(text) => {setTitle(text)}}
                            placeholder='Enter a task'
                        />
                        <View  style={{height: 30}} />
                        <View style={{elevation: 8, backgroundColor: 'white', borderRadius: 20, padding: 10}}>
                            <Input 
                                label='Add Date'
                                labelStyle={{fontSize: 25, fontWeight: 'normal', color: '#f85f6a', paddingLeft: 5}}
                                inputContainerStyle={styles.tStyle}
                                containerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 20, paddingTop: 20}}
                                value={ moment(date).format("LL").toString()}
                                //onChangeText={(text) => {setDate(text)}}
                                //placeholder='ex: 27th March, 21'
                                leftIcon={
                                    <TouchableOpacity onPress={showDatePicker}>
                                        <Icon 
                                        name='calendar'
                                        color='#f85f6a'
                                        size={24}
                                        />
                                    </TouchableOpacity>
                                }
                            /> 
                            <DateTimePickerModal
                                isVisible={isDatePVisible}
                                mode="date"
                                onConfirm={handleDateConfirm}
                                onCancel={hideDatePicker}
                            />
                            <View style={{height: 10}} />
                            <Input 
                                label='Add Time'
                                labelStyle={{fontSize: 25, fontWeight: 'normal', color: '#f85f6a', paddingLeft: 5}}
                                inputContainerStyle={styles.tStyle}
                                containerStyle={{ backgroundColor: 'white', elevation: 5, borderRadius: 20, paddingTop: 20}}
                                value={moment(time).format("LT")}
                                //onChangeText={(text) => {setTime(text)}}
                                //placeholder='ex: 8:30 AM|PM' //moment.format('LT')
                                leftIcon={
                                    <TouchableOpacity onPress={showTimePicker}>
                                        <Icon 
                                        name='clock'
                                        color='#f85f6a'
                                        size={24}
                                        />
                                    </TouchableOpacity>
                                }
                            />
                            <DateTimePickerModal
                                isVisible={isTimePVisible}
                                mode="time"
                                onConfirm={handleTimeConfirm}
                                onCancel={hideTimePicker}
                                display="spinner"
                                is24Hour={false}
                            />
                        </View>
                        <View style={{height: 10}}/>
                        
                        {
                            !forEdit ?
                            null : //replace forEdit with !forEdit after coding...
                            <View style={{elevation: 8, borderRadius: 20, backgroundColor: 'white', height: 50, flexDirection: 'row'}}>
                                <Text style={{fontSize: 20, color: '#f85f6a', paddingLeft: 20, paddingTop: 8}}>Status</Text>
                                <TextInput 
                                    value={status}
                                    onChangeText={(text) => setStatus(text)}
                                    placeholder='status'
                                    style={{fontSize: 20, color: 'black', paddingLeft: 20}}
                                />
                            </View>
                        }
                        <View style={{height: 20}} />
                        <Button 
                            title='Save'
                            buttonStyle={{height: 55, width: 150, alignSelf: 'center', borderColor: '#f85f6a'}}
                            titleStyle={{fontWeight: '700'}}
                            containerStyle={{backgroundColor: 'rgb(248,248,248)', elevation: 8, width: 150, borderRadius: 10, marginBottom: 20}}
                            onPress={() => {
                                onSubmit(title, date, time, status);
                            }}
                        />
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

TodoForm.defaultProps = {
    initialValues: {
        title: '',
        date: new Date(),
        time: new Date(),
        status: ''
    }
};


const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 18,
        borderRadius: 20,
        height: 60,
        paddingLeft: 20,
        marginTop: 15
    },
    tStyle: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 18,
        borderRadius: 20,
        height: 45,
        paddingLeft: 20,
        marginTop: 5
    }
});


export default TodoForm;