import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {Logo} from '../src/Logo'

export const OtpInput = () => {
    return (
      <View>
        <Logo />
        <View style={styles.wrap}>
          <View style={styles.otpInputView}>
            <View>
              <Text style={styles.text}>We have sent a code to your number</Text>
            </View>
            <View style={styles.textInput}>
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
              <TextInput style={styles.otpInput} maxLength={1} keyboardType={"numeric"} />
            </View>
            <View>
              <Text style={styles.textSendCode}>send the code again</Text>
            </View>
            <View style={styles.buttonView}>
              <Button title='Next' style={styles.button} color={'#018786'} />
            </View>
          </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  wrap: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  textInput: {
    justifyContent: 'space-evenly', 
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24
  },
  otpInputView: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#3D3D47',
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
  },
  otpInput: {
    color: '#7F7F8B', 
    alignSelf: 'center',
    fontSize: 31,
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#7F7F8B'
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    width: 238,
    height: 52,
    color: '#ffffff',
    fontSize: 18,
    marginTop: 40,
    //fontFamily: 'NunitoSans-Regular-SemiBold'
  },
  textSendCode: {
    alignItems: 'center',
    textAlign: 'center',
    width: 238,
    height: 52,
    color: '#ffffff',
    fontSize: 14,
    marginTop: 20,
    textDecorationLine: 'underline',
    //fontFamily: 'NunitoSans-regularBold'
  },
  buttonView: {
    width: '80%',
    marginBottom: 17
  },
  button: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#28282F',
    borderRadius: 6,
    fontSize: 17,
    height: 30,
    //fontFamily: 'NunitoSans-Regular-ExtraBold'
  }
})