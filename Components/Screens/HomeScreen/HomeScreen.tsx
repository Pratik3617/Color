import React from "react";
import { ImageBackground, SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "./HomeHeader";
import HomeButton from "./HomeButton";
import Game from "./Game";


function HomeScreen(){
    return(
        <ImageBackground source={require('../../../assets/Images/background.png')}>
            <View style={styles.container}>
                <HomeHeader/>
                <HomeButton/>
                <Game/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})

export default HomeScreen;