import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontSize from "../../../constants/FontSize";
import Colors from "../../../constants/Colors";

function GameResult(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Icon name="emoji-events" style={styles.icon}></Icon>
            </View>

            <View style={styles.resultHeader}>
                <Text style={styles.columnText}>Period</Text>
                <Text style={styles.columnText}>Price</Text>
                <Text style={styles.columnText}>Number</Text>
                <Text style={styles.columnText}>Result</Text>
            </View>
            <View>
                <ScrollView style={{ height: 150 }} showsVerticalScrollIndicator={false}>
                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>

                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>
                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>

                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>

                    <View style={styles.result}>
                        <Text style={styles.text}>2349000</Text>
                        <Text style={styles.text}>45150</Text>
                        <Text style={styles.text}>8</Text>
                        <View style={styles.box}>
                            <View style={styles.color}></View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    header:{
        alignItems:'center',
        borderBottomWidth : 3,
        borderBottomColor: Colors.primary,
    },
    icon:{
        fontSize: 50,
        fontWeight: 'bold',
        color: '#ffc505',
    },
    resultHeader:{
        marginTop : 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom : 5,
        borderBottomColor: '#b8b5ab',
    },
    columnText:{
        flex:1,
        textAlign: 'center',
        color: "#333",
        fontSize: FontSize.medium,
    },
    result:{
        marginTop : 10,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingBottom : 10,
        borderBottomColor: '#b8b5ab',
    },
    box:{
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    color:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        height: 15,
        backgroundColor: "red",
        borderRadius: 50,
        marginRight: 20
    },
    text:{
        flex: 1,
        color: '#333',
        fontSize: FontSize.medium,
        marginLeft: 10,
    },
    scrollContainer: {
        flexGrow: 1,
        height: 200,
        justifyContent: 'center',
    },
})

export default GameResult;