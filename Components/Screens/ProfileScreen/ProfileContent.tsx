import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileTab from "./ProfileTab";
import { useAuth } from "../../../Context/AuthContext";
import { Text } from "react-native-elements";
import FontSize from "../../../constants/FontSize";

function ProfileContent(){
    const {logout} = useAuth();

    function userLogout(){
        logout();
    }
    return(
        <View style={styles.container}>
            <Text style={styles.headText}>Account Info</Text>
            <ProfileTab key={0} name="person" title="Pratik" onpress={()=>{}}/>
            <ProfileTab key={1} name="account-balance-wallet" title="Wallet balance : ₹985" onpress={()=>{}}/>
            <ProfileTab key={2} name="key" title="Change Password" onpress={()=>{}}/>
            <ProfileTab key={3} name="account-balance" title="Add Bank Details" onpress={()=>{}}/>
            <ProfileTab key={4} name="person" title="Account History" onpress={()=>{}}/>
            <ProfileTab key={5} name="logout" title="Logout" onpress={userLogout}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    },
    headText:{
        marginTop: 20,
        fontSize: FontSize.large,
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: 10,
        textAlign:'center'
    }
})

export default ProfileContent;