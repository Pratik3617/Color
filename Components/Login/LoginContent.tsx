import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import FormButton from '../Register/FormButton';
import FloatingLabelTextInput from '../Register/Input';
import { useAuth } from '../../Context/AuthContext';



function LoginContent(props: { navigation: { navigate: (arg0: string) => void; }; }){
    const { login } = useAuth();

    function userLogin(){
        login();
        props.navigation.navigate('Home');
    }

    const navigateToRegister = () => {
        props.navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.container}>
            <FloatingLabelTextInput placeholder="Enter Email Address" iconName="email" isSecure={false}/>
            <FloatingLabelTextInput placeholder="Enter Password" iconName="lock" isSecure={true}/>  
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
        fontWeight: 'bold',
        letterSpacing: 1,
        fontSize: FontSize.medium
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

export default LoginContent
