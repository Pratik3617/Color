import React from "react";
import { SafeAreaView, Text, View } from "react-native";


function ProfileScreen(){
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#cddef9",}}>
            <View>
                <Text>
                    Profile Page
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default ProfileScreen;