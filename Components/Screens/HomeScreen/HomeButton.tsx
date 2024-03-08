import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontSize from '../../../constants/FontSize';
import Colors from '../../../constants/Colors';

function HomeButton(){
    const [isTextFocusedBcone, setIsTextFocusedBcone] = useState(true);
    const [isTextFocusedEmerd, setIsTextFocusedEmerd] = useState(false);

    const handleBconePress = () => {
        setIsTextFocusedBcone(!isTextFocusedBcone);
        setIsTextFocusedEmerd(!isTextFocusedEmerd);
    };

    const handleEmerdPress = () => {
        setIsTextFocusedEmerd(!isTextFocusedEmerd);
        setIsTextFocusedBcone(!isTextFocusedBcone);
    };

    return (
        <View style={styles.block}>
            <Text style={[styles.game1B, isTextFocusedBcone && styles.focusedText1]} onPress={handleBconePress}>Bcone</Text>
            <Text style={[styles.game1B, isTextFocusedEmerd && styles.focusedText1]} onPress={handleEmerdPress}>Emerd</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block:{
        display:"flex",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: 'space-between',
        padding:10,
        marginTop: 10
    },
    game1B:{
        flex: 1,
        textAlign: "center",
        paddingBottom: 5,
        color:"#333",
        fontFamily: "Montserrat-Bold",
        fontSize: FontSize.medium,
        letterSpacing:1
    },
    focusedText1:{
        borderBottomWidth : 3,
        borderBottomColor: Colors.primary,
    },
    // game2B:{
    //     flex: 1,
    //     textAlign: "center",
    //     paddingBottom: 5,
    //     color:"#333",
    //     fontWeight:'bold',
    //     fontSize: FontSize.medium,
    //     letterSpacing:1
    // },
    // focusedText2:{
    //     borderBottomWidth : 3,
    //     borderBottomColor: Colors.primary
    // },
})

export default HomeButton;