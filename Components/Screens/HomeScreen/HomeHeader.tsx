import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../../../constants/Layout";
import FontSize from "../../../constants/FontSize";
import Font from "../../../constants/Font";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../../constants/Colors";


function HomeHeader(){
    const amount = 5000;
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>Available Balance : ₹ {amount}</Text>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={()=>{}}>
                    <Text style={styles.buttonText}>Recharge</Text>
                </TouchableOpacity>
                <Icon style={styles.icon} name="cached" size={28}></Icon>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:Layout.height * 0.14,
        width: Layout.width * 0.94,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#333",
        shadowColor: "#333",
        shadowOffset:{
          width:0,
          height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    headerText:{
        marginTop: 2,
        fontSize: FontSize.medium,
        color: "white",
        fontWeight: 'bold',
        fontFamily: Font['poppins-semiBold']
    },
    bottom:{
        display: 'flex',
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: Colors.primary, 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
        width: Layout.width * 0.4,
    },
        buttonText: {
        color: '#fff', 
        fontSize: 16,
        fontWeight:'bold',
        letterSpacing: 1
    },
    icon:{
        color: "green",
        marginTop: 10
    }
})

export default HomeHeader;