import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Tile } from "react-native-elements";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from "../../../constants/Colors";
import FontSize from "../../../constants/FontSize";
import Layout from "../../../constants/Layout";

interface ProfileTabProps {
    name: string;
    title: string;
    onpress: () => void;
  }

const ProfileTab: React.FC<ProfileTabProps> = ({name,title,onpress}) => {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} name={name} onPress={onpress}></Icon>
            <Text style={styles.text} onPress={onpress}>{title}</Text>
            <Icon style={styles.arrow} name="keyboard-double-arrow-right"></Icon>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: Layout.height*0.08,
        padding: 10,
        backgroundColor: '#dfe9ed',
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5
    },
    icon:{
        fontSize: 25,
        marginRight: 20,
        color: "#333",
        borderRadius: 30,
        backgroundColor :'red',
        padding: 7,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 2,
    },
    text:{
        flex: 1,
        color: '#333',
        fontSize: FontSize.medium,
        letterSpacing: 1,
        fontWeight: 'bold'
    },
    arrow:{
        fontSize: FontSize.large,
        fontWeight: 'bold',
        color: Colors.primary
    }
})

export default ProfileTab;