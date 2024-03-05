import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "./HomeHeader";
import HomeButton from "./HomeButton";
import Game from "./Game";


function HomeScreen(){
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#cddef9",}}>
            <View style={styles.container}>
                <HomeHeader/>
                <HomeButton/>
                <Game/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingVertical: 10
    }
})

export default HomeScreen;