import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import ResultBlock from "./ResultBlock";


function ResultScreen(){
    return(
        <ImageBackground style={styles.container} source={require('../../../assets/Images/background.png')}>
            <Text style={styles.header}>History</Text>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <ResultBlock amountInvested={50} optedColor="red" 
                    optedNumber={-1} winningAmount={8} 
                    win={true} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="green" 
                    optedNumber={-1} winningAmount={8} 
                    win={true} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="" 
                    optedNumber={2} winningAmount={50} 
                    win={false} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="green" 
                    optedNumber={-1} winningAmount={8} 
                    win={true} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="" 
                    optedNumber={2} winningAmount={50} 
                    win={false} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="green" 
                    optedNumber={-1} winningAmount={8} 
                    win={true} date="03/04/2024"
                />

                <ResultBlock amountInvested={50} optedColor="" 
                    optedNumber={2} winningAmount={50} 
                    win={false} date="03/04/2024"
                />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10
    },
    header:{
        fontFamily: 'Montserrat-Bold',
        color: Colors.primary,
        fontSize: FontSize.xxLarge,
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 10,
    },
    scrollContainer: {
        flex: 1,
    },

})

export default ResultScreen;