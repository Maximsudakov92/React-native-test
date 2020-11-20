import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
//import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import { Authorization } from './src/Authorization'
import { Login } from './src/login'
import { OtpInput } from './src/OtpInput';
import { MainScreen } from './src/MainScreen';

/*async function loadApplication() {
  await Font.loadAsync({
     'NunitoSans-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
     //'NunitoSans-regularBold': require('./assets/fonts/NunitoSans-Bold.ttf'),
     'NunitoSans-Regular-ExtraBold': require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
     'NunitoSans-Regular-SemiBold': require('./assets/fonts/NunitoSans-SemiBold.ttf'),
     'Sarabun-Regular': require('./assets/fonts/Sarabun-Regular.ttf'),
     'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf')
  })
}
*/
export default function App() {
  /*
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
      />
    )
  }
  */
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Login /> 
        {/* <MainScreen /> */}
        {/* <Authorization /> */}
        {/* <OtpInput  /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32323D',
    height: '96%'
  },
  wrapper: {
    height: '100%',
    backgroundColor: '#000000',
    flexDirection: 'column-reverse'
  }
});
