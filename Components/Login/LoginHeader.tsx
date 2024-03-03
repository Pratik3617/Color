import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView} from 'react-native'
import Font from '../../constants/Font';
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';

export class LoginHeader extends Component {
  render() {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.headerText}> Login Here </Text>
                <Text style={styles.subText}>Welcome back you've been Missed!</Text>
            </View>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        alignItems:"center",
        fontFamily: Font['poppins-bold']
    },
    headerText:{
        fontSize: FontSize.xxLarge,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    subText:{
        fontSize:FontSize.large,
        textAlign: "center",
        width: "80%",
        marginTop: Spacing*1.5,
        color: 'black',
        fontWeight: '600',
        marginBottom: Spacing*2
    }
});

export default LoginHeader
