import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import LoginHeader from './LoginHeader';
import LoginContent from './LoginContent';

function LoginScreen(props: { navigation: { navigate: (arg0: string) => void; }; }){
    return (
        <ImageBackground source={require('../../assets/Images/background.png')}>
            <View style={styles.container}>
                <LoginHeader/>
                <LoginContent navigation={props.navigation}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: 'center',
    },
});

export default LoginScreen
