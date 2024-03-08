import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';


export class SignupHeader extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
            <Text style={styles.headerText}> Create Account </Text>
            <Text style={styles.subText}>Create your account to explore!</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    header:{
        marginTop: 20,
        alignItems:"center",
    },
    headerText:{
        fontSize: FontSize.xxLarge,
        color: Colors.primary,
        fontFamily: 'Montserrat-Bold',
    },
    subText:{
        fontSize:FontSize.large,
        textAlign: "center",
        width: "80%",
        marginTop: Spacing*1.5,
        color: 'black',
        fontWeight: '600',
        fontFamily: 'Montserrat-Bold',
        marginBottom: Spacing*2
    }
});

export default SignupHeader
