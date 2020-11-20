import React from 'react'
import { View, StyleSheet, Button ,TextInput, Text, Image, KeyboardAvoidingView} from 'react-native'
import { Logo } from '../src/Logo'

export const Authorization = props => {
  
  const pressHandler = () => {
    onSubmit('Test button')
  }
  
  return (
    <View>
      <Logo />
      <KeyboardAvoidingView
        style={styles.KeyboardView}
        enabled={'false'}
        >
        <View style={styles.block}> 
          <View style={styles.login}>
            <TextInput  defaultValue='Input phone number or email' style={styles.text}/>
            <Button title='continue' style={styles.button} color={'#018786'} onPress={pressHandler} />
          </View>
          <View style={styles.socialNetwork}>
            <View style={styles.textOr}>
              <View style={styles.border}></View>
              <Text style={styles.textOr}>or</Text>
              <View style={styles.border}></View>
            </View>
            <View style={styles.socialButtons}>
              <View style={styles.image}>
                  <Image style={styles.imgMargin} source={require('../assets/facebook_icon.png')} />
                  <Image style={styles.imgMargin} source={require('../assets/google_icon.png')} />
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  KeyboardView: {
    height: '100%'
  },
  block: {
    flexDirection: 'column',
    alignItems: 'center' ,
  },
  login: {
    justifyContent: 'space-between',
    height: '25%',
    width: '80%',
    marginTop: 30
  },
  text: {
    textAlign: 'left',
    paddingLeft: '5%',
    fontSize: 16,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 2,
    backgroundColor: '#28282F',
    borderColor: '#28282F',
    color: '#7F7F8B',
    padding: 5,
    //fontFamily: 'Sarabun-Regular'
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#28282F',
    borderRadius: 4,
    fontSize: 20,
   // fontFamily: 'NunitoSans-Regular'
  },
  socialNetwork: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '75%',
    height: '25%',
    margin: 10
  },
  textOr: {
    flexDirection: 'row',
    justifyContent: 'center',
    //fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
    color: '#fff',
  },
  border: {
    width: '45%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#7F7F8B',
    margin: 5
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  imgMargin: {
    margin: 5
  }
})