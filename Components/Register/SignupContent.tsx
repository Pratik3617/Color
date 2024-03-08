import React, { Component, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FloatingLabelTextInput from './Input'
import FormButton from './FormButton'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'

function SignupContent(props: { navigation: { navigate: (arg0: string) => void } }){
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };

  const handleSignUp = () => {
    if (validateInputs()) {
      props.navigation.navigate('Login');
    } else {
      console.error('Sign up failed. Please check your inputs.');
    }
  };

  const validateInputs = () => {
    return validateEmail(email) && validatePhoneNumber(phoneNumber) && validatePassword(password);
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <FloatingLabelTextInput placeholder="Enter Email Address" iconName="email" isSecure={false} 
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <FloatingLabelTextInput placeholder="Enter Phone Number" iconName="phone" isSecure={false}
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <FloatingLabelTextInput placeholder="Enter Password" iconName="lock" isSecure={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />                
      <FormButton title="Sign Up" onPressFunction={handleSignUp}/>

      <View style={styles.login}>
          <Text style={styles.text1}>Already have an account?</Text>
          <Text style={styles.text2} onPress={navigateToLogin}>Sign In</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        width: "100%",
        height:"100%",
    },
    login:{
        marginTop: 20,
        alignItems: 'center',
    },
    text1:{
        fontSize: FontSize.medium,
        color: "#333",
        fontFamily: 'Montserrat-Regular',
    },
    text2:{
        marginTop: 10,
        fontSize: FontSize.large,
        color: Colors.primary,
        fontFamily: 'Montserrat-Bold',
    }
});

export default SignupContent
