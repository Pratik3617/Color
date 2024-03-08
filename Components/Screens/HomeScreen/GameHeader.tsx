import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontSize from "../../../constants/FontSize";


function GameHeader(){
    return(
        <View style={styles.topButton}>
            <View style={styles.box}>
                <View style={styles.boxElement}>
                    <Icon style={styles.icon} name="emoji-events"></Icon>
                    <Text style={styles.text}>PERIOD</Text>
                </View>
                <Text style={styles.boxText}>2349001</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.boxElement}>
                    <Icon style={styles.icon} name="access-alarm"></Icon>
                    <Text style={styles.text}>COUNTDOWN</Text>
                </View>
                <Text style={styles.boxText}>01:30</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topButton:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text:{
        color: "#333",
        letterSpacing: 1,
        fontFamily: "Montserrat-Regular",
    },
    box:{
        flex:1,
        flexDirection: "column",
        textAlign: "center",
        justifyContent: 'space-between',
        alignItems:'center'
    },
    boxElement:{
        flexDirection: 'row',
        alignItems:'center'
    },
    icon:{
        marginRight: 5,
        fontSize : 20
    },
    boxText:{
        marginTop: 5,
        fontSize: FontSize.large,
        color: "#333",
        fontFamily: "Montserrat-Bold",
    }
})

export default GameHeader;