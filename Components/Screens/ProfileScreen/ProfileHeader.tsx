import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../../constants/Colors";

function ProfileHeader(){
    const Id = "23435345";
    return(
        <View style={styles.container}>
            <Icon name="person" style={styles.icon}></Icon>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    icon:{
        fontSize: 100,
        color: Colors.primary,
        borderRadius: 20,
        backgroundColor: "#dfe9ed",
        elevation: 5
    },
})

export default ProfileHeader;