import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AppNavigator from './Components/AppNavigator';
import 'react-native-gesture-handler';
import BottomTabs from './Components/BottomTab';
import { useAuth } from './Context/AuthContext';

function App(): React.JSX.Element {
  const {isLoggedIn} = useAuth();
  return (
      <SafeAreaView style={styles.container}>
        {isLoggedIn ? <BottomTabs/> : <AppNavigator />}      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
