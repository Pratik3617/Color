import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import AppNavigator from './Components/AppNavigator';
import 'react-native-gesture-handler';
// import HomeContainer from './Components/HomeContainer';
import BottomTabs from './Components/BottomTab';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <AppNavigator /> */}
      
      <BottomTabs/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
