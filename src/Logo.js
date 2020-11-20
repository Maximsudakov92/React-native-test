import React from 'react'
import { View, StyleSheet, Image } from 'react-native'


export const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image style={styles.Logo} source={require('../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})