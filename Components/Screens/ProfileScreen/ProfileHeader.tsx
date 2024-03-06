import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Layout from "../../../constants/Layout";
import FontSize from "../../../constants/FontSize";
import Font from "../../../constants/Font";
import Colors from "../../../constants/Colors";

function ProfileHeader(){
    const Id = "23435345";
    return(
        <View style={styles.container}>
            <Icon name="person" style={styles.icon}></Icon>
            <Text style={styles.id}>Id : {Id}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
    icon:{
        fontSize: 100,
        color: Colors.primary,
        borderRadius: 50,
        backgroundColor: "#cddef9",
        borderWidth: 2,
        borderColor: '#333'
    },
    id:{
        marginTop: 10,
        fontSize: FontSize.medium,
        color: '#333',
        fontFamily: Font['poppins-regular'],
    }
})

export default ProfileHeader;