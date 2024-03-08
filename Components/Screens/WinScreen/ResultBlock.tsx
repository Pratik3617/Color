import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import FontSize from "../../../constants/FontSize";
import Layout from "../../../constants/Layout";

interface ResultProps {
    amountInvested: number;
    optedColor: string;
    optedNumber: number;
    winningAmount: number;
    win: boolean;
    date: string;
}

const ResultBlock: React.FC<ResultProps> = ({amountInvested,optedColor,optedNumber,winningAmount,win,date}) =>{
    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.date}>Date : {date}</Text>

            <View style={styles.blockHead}>
                <Text style={styles.text}>Invested</Text>
                <Text style={styles.text}>Opted For</Text>
                <Text style={styles.text}>Winning</Text>
            </View>
            <View style={styles.blockHead}>
                <Text style={styles.num}>{amountInvested}</Text>
                {optedNumber !== -1 && <Text style={styles.num}>{optedNumber}</Text>}

                {optedColor && (
                    <View style={[styles.circle, { backgroundColor: optedColor }]} />
                )}
                <Text style={win ? styles.win : styles.loss}>{ win? "+ " + winningAmount : "- "+winningAmount}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#dfe9ed",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    date:{
        marginLeft: Layout.width*0.05,
        color: "#333",
        fontFamily: 'Montserrat-Bold',
        fontSize: FontSize.large,
    },
    blockHead:{
        marginTop: 10,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    text:{
        flex: 1,
        color: "#333",
        fontFamily: 'Montserrat-Bold',
        fontSize: FontSize.small,
        textAlign: 'center'
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginLeft: 10,
    },
    win:{
        color: "green",
        fontWeight: 'bold',
        fontSize: FontSize.medium,
    },
    loss:{
        color: "red",
        fontWeight: 'bold',
        fontSize: FontSize.medium,
    },
    num:{
        fontWeight: 'bold',
        color: "#333",
        fontSize: FontSize.medium,
    }
});

export default ResultBlock;