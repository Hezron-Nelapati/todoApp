import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AuthForm = ({header, errorMessage, onSubmit, nav, navText, text, action}) => {
  const [isTrue, setIsTrue] = useState(true);
  const [iconName, setName] = useState('eye-with-line');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      enabled={true}
      style={{flex: 1}}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 26, fontWeight: 'bold', marginLeft: 5, marginTop: 60}}>{header}</Text>
      {
        (action!=null) ? 
        <Text style={{fontSize: 16, marginTop: 15, marginLeft: 5, color: '#989eb1'}}>Hi there! Nice to see you again.</Text>:
        null
      }
      <Input 
        label='Email'
        labelStyle={{color: '#f85f6a'}}
        containerStyle={{marginTop: 30, width: 300}}
        inputContainerStyle={{color: '#35424a'}}
        placeholder='Your email address'
        onChangeText={setEmail}
        value={email}
      />
      <Input 
        label='Password'
        labelStyle={{color: '#f85f6a'}}
        containerStyle={{marginTop: 10, width: 300}}
        inputContainerStyle={{color: '#35424a'}}
        placeholder='Your password'
        onChangeText={setPassword}
        value={password}
        autoCapitalize= 'none'
        autoCorrect= {false}
        secureTextEntry= {isTrue}
        rightIcon={
          <Icon.Button
            //type='Entypo'
            name = {iconName}
            color='#d1d6db'
            size={24}
            onPress={() => {
              if(iconName === 'eye-with-line'){
                setName('eye'), setIsTrue(false)
              }else{
                setName('eye-with-line'), setIsTrue(true)
              }
            }}
            secureTextEntry={isTrue}
            backgroundColor= 'white'
          />
        }
      />
      <Button 
        buttonStyle={{width: 280, height: 40, color: '#ffffff', backgroundColor: '#f85f6a', marginLeft: 5}}
        title={header}
        onPress={() => {onSubmit({email, password})}}
      />
      <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center', justifyContent: 'flex-start', marginLeft: 25}}>
        { (action!=null) ?
          <Text style={{fontSize: 16, color: '#989eb1'}}>Don't have an Account? </Text>:
          <Text style={{fontSize: 16, color: '#989eb1'}}>Already have an Account? </Text>
        }
        <TouchableOpacity onPress={() => nav.navigate(navText)}>
            <Text style={{fontSize: 16, color: '#f85f6a'}}>{text}</Text>
        </TouchableOpacity>
      </View>
      {
        errorMessage ?
        <Text style={{fontSize: 20, textAlign: 'center', color: 'red', marginVertical: 20, marginRight: 40}}>{errorMessage}</Text>           :
        null
      }
    </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: 'white', 
    paddingTop: 25,
    paddingLeft: 25,
    //justifyContent: 'space-around'
  }
})

export default AuthForm;