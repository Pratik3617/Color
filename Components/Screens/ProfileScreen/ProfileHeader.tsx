import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";

function ProfileHeader(){
    const Id = "23435345";
    const username = "Pratik Patel"
    return(
        <View style={styles.container}>
            <Icon name="person" style={styles.icon}></Icon>
            <Text style={styles.name}>{username}</Text>
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
    name:{
        marginTop: 10,
        fontSize: FontSize.large,
        color: "#333",
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 1
    }
})

export default ProfileHeader;