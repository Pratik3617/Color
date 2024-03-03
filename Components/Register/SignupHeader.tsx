import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FontSize from '../../constants/FontSize';
import Colors from '../../constants/Colors';
import Spacing from '../../constants/Spacing';
import Font from '../../constants/Font';

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

export default SignupHeader
