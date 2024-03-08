import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Layout from "../../../constants/Layout";
import FontSize from "../../../constants/FontSize";

function GameBox(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.colorBox}>
                <View style={styles.green}>
                    <Text style={styles.colorText}>Join Green</Text>
                </View>
                <View style={styles.violet}>
                    <Text style={styles.colorText}>Join Violet</Text>
                </View>
                <View style={styles.red}>
                    <Text style={styles.colorText}>Join Red</Text>
                </View>
            </View>
            <View style={styles.NumberBox}>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>0</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>1</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>2</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>3</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>4</Text>
                </View>
            </View>
            <View style={styles.NumberBox}>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>5</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>6</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>7</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>8</Text>
                </View>
                <View style={styles.NumberBlock}>
                    <Text style={styles.NumberText}>9</Text>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
    },
    colorBox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        marginTop: 5
    },
    green:{
        backgroundColor: "green",
        padding: 10,
        borderRadius:3,
        textAlign:'center'
    },
    colorText:{
        color: "#fff",
        letterSpacing:1,
        fontFamily: "Montserrat-Bold",
    },
    violet:{
        backgroundColor: "purple",
        padding: 10,
        borderRadius:3,
        textAlign:'center',
    },
    red:{
        backgroundColor: "red",
        padding: 10,
        borderRadius:3,
        textAlign:'center'
    },
    NumberBox:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop: 10
    },
    NumberBlock:{
        width: Layout.width*0.15,
        height: Layout.height*0.05,
        backgroundColor: '#0b4a27',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    NumberText:{
        color:"#ffffff",
        fontFamily: "Montserrat-Bold",
        fontSize: FontSize.medium
    }
})

export default GameBox;