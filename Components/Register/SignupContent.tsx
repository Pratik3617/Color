import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FloatingLabelTextInput from './Input'
import FormButton from './FormButton'
import FontSize from '../../constants/FontSize'
import Colors from '../../constants/Colors'

function SignupContent(props: { navigation: { navigate: (arg0: string) => void } }){
  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <FloatingLabelTextInput placeholder="Enter Email Address" iconName="email" isSecure={false}/>
              <FloatingLabelTextInput placeholder="Enter Phone Number" iconName="phone" isSecure={false}/>
              <FloatingLabelTextInput placeholder="Enter Password" iconName="lock" isSecure={true}/>                
              <FormButton title="Sign Up" onPressFunction={()=>{}}/>

              <View style={styles.login}>
                  <Text style={styles.text1}>Already have an account?</Text>
                  <Text style={styles.text2} onPress={navigateToLogin}>Sign In</Text>
              </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    text:{
        textAlign: 'right',
        fontWeight: '700',
        color: '#333',
        marginVertical: 10,
        fontSize: FontSize.medium
    },
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
        color: "#333"
    },
    text2:{
        marginTop: 10,
        fontSize: FontSize.large,
        color: Colors.primary,
        fontWeight: 'bold'
    }
});

export default SignupContent
