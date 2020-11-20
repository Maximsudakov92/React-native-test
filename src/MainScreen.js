import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


export const MainScreen = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.eventsBar}>
        <Text style={styles.textEvents}>Events</Text>
      </View>
      <View style={styles.navBar}>
        <View style={styles.navBarView}>
          <Image source={require('../assets/Events.png')} />
          <Text style={styles.text}>Events</Text>
        </View>
        <View style={styles.navBarView}>
          <Image source={require('../assets/Maps.png')} />
          <Text style={styles.text}>Maps</Text>
        </View>
        <View style={styles.navBarView}>
          <Image source={require('../assets/Camera.png')} marginBottom={3} />
          <Text style={styles.text}>Camera</Text>
        </View>
        <View style={styles.navBarView}>
          <Image source={require('../assets/Settings.png')} />
          <Text style={styles.text}>Settings</Text>
        </View >
        <View style={styles.navBarView}> 
          <Image source={require('../assets/Profile.png')} />
          <Text style={styles.text}>Profile</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between'
  },
  eventsBar: {
    height: '10%',
    backgroundColor: '#28282F',
    justifyContent: 'center'
  },
  navBar: {
    height: '10%',
    backgroundColor: '#28282F',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center'
  },
  textEvents: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 26,
   // fontFamily: 'Roboto-Regular'
  },
  navBarView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    //fontFamily: 'NunitoSans-Regular',
    color: '#fff',
  }
})