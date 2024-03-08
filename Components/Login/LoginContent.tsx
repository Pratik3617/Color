import React, { Component, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import FormButton from '../Register/FormButton';
import FloatingLabelTextInput from '../Register/Input';
import { useAuth } from '../../Context/AuthContext';



function LoginContent(props: { navigation: { navigate: (arg0: string) => void; }; }){
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function userLogin(){
        if(validateInputs()){
            login();
            props.navigation.navigate('Home');
        }else{
            console.error('Sign In Failed. Please Check Your Inputs');
        }  
    }

    const navigateToRegister = () => {
        props.navigation.navigate('Register');
    };

    const validateInputs = () => {
        return validateEmail(email) && validatePassword(password);
    };

    const validateEmail = (email: string) => {
        return email.includes('@');
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
            <FloatingLabelTextInput placeholder="Enter Password" iconName="lock" isSecure={true}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />  
            <Text style={styles.pwd}>Forgot Password?</Text>              
            <FormButton title="Sign In" onPressFunction={userLogin}/>

            <View style={styles.login}>
                <Text style={styles.text1}>Create an account?</Text>
                <Text style={styles.text2} onPress={navigateToRegister}>Sign Up</Text>
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
    pwd:{
        marginVertical: 10,
        textAlign: 'right',
        color: Colors.primary,
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 1,
        fontSize: FontSize.medium
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

export default LoginContent
