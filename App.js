/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import RNPaystack from 'react-native-paystack';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  chargeCardAccess = () => {
    console.log('charge card');
    RNPaystack.chargeCardWithAccessCode({
      cardNumber: '50606 66666 66666 6666', 
      expiryMonth: '12', 
      expiryYear: '17', 
      cvc: '123',
      accessCode: 'hizs6zbjhwoznn7'
    })
    .then(response => {
      console.log(response); // do stuff with the token
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  chargeCard = () => {
    console.log('charge card');
    RNPaystack.chargeCard({
      cardNumber: '4123450131001381', 
      expiryMonth: '12', 
      expiryYear: '17', 
      cvc: '883',
      email: 'dev@vestarapp.dev',
      amountInKobo: 150000,
    })
    .then(response => {
      console.log(response); // do stuff with the token
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to VestarApp!
        </Text>
        <TouchableOpacity onPress={this.chargeCardAccess}>
        <Text style={styles.instructions}>
          Charge Card with AccessCode
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.chargeCard}>
        <Text style={[styles.instructions, {marginTop: 10}]}>
          Charge Card without AccessCode
        </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
