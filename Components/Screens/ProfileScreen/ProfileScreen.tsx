import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";


function ProfileScreen(props: { navigation: { navigate: (arg0: string) => void; }; }){
    return(
        <SafeAreaView style={styles.container}>
            <ProfileHeader/>
            <ProfileContent navigation={props.navigation}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#cddef9",
        padding: 10
    }
})
export default ProfileScreen;