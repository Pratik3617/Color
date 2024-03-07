import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";


function ProfileScreen(){
    return(
        <ImageBackground style={styles.container} source={require('../../../assets/Images/background.png')}>
            <ProfileHeader/>
            <ProfileContent/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10
    }
})
export default ProfileScreen;