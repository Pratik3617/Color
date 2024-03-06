import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileTab from "./ProfileTab";

function ProfileContent(props: { navigation: { navigate: (arg0: string) => void; }; }){

    function logout(){
        props.navigation.navigate('Login');
    }
    return(
        <View style={styles.container}>
            <ProfileTab name="person" title="Pratik" onpress={()=>{}}/>
            <ProfileTab name="account-balance-wallet" title="₹1002" onpress={()=>{}}/>
            <ProfileTab name="key" title="Change Password" onpress={()=>{}}/>
            <ProfileTab name="account-balance" title="Add Bank Details" onpress={()=>{}}/>
            <ProfileTab name="person" title="Account History" onpress={()=>{}}/>
            <ProfileTab name="logout" title="Logout" onpress={()=>{}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
    }
})

export default ProfileContent;