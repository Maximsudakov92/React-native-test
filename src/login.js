import React from 'react'
import { View, StyleSheet, Image, Button ,TextInput, Text, KeyboardAvoidingView } from 'react-native'
import { Logo } from '../src/Logo'

export const Login = props => {
  
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
            <Text style={styles.signIn}>Sign In</Text>
            <TextInput  
              placeholder='Email' 
              placeholderTextColor='rgba(255, 255, 255, 0.7);'
              style={styles.text}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
              marginBottom={25}
              //fontFamily='NunitoSans-Regular'
            />
            <TextInput  
              placeholder='Password' 
              placeholderTextColor='rgba(255, 255, 255, 0.7);'
              style={styles.text} 
              secureTextEntry
              //fontFamily='NunitoSans-Regular'
            />
            <Text style={styles.forgotPass}>Forgot password?</Text>
            <Button title='Log in' style={styles.button} color={'#018786'} onPress={pressHandler} />
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
          <View style={styles.wrapSingUp}>
            <Text style={styles.haveAcc}>Don`t have an account?</Text> 
            <Text style={styles.singUp}>Sign Up</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>  
  )
}

const styles = StyleSheet.create({
  KeyboardView: {
    height: '75%'
  },
  block: {
    flexDirection: 'column',
    alignItems: 'center' ,
  },
  signIn: {
    color: '#7F7F8B',
    fontSize: 24,
    letterSpacing: 1,
    marginBottom: 15,
    //fontFamily: 'nunitoSans-regularBold'
  },
  login: {
    justifyContent: 'space-between',
    height: '60%',
    width: '80%',
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
    padding: 5
  },
  forgotPass: {
    color: 'rgba(255, 255, 255, 0.5)',
    textDecorationLine: 'underline',
    textAlign: 'right',
    fontSize: 14,
    marginBottom: 25,
   // fontFamily: 'Roboto-Regular'
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#28282F',
    borderRadius: 4,
    fontSize: 20,
    marginBottom: 20,
    //fontFamily: 'NunitoSans-Regular-ExtraBold'
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
    marginHorizontal: 10,
    marginBottom: 30
  },
  wrapSingUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAcc: {
    color: 'rgba(255, 255, 255, 0.54)',
    paddingRight: 3,
    //fontFamily: 'NunitoSans-Regular'
  },
  singUp: {
    color: '#fff',
    textDecorationLine: 'underline',
    //fontFamily: 'NunitoSans-Regular'
  }
})