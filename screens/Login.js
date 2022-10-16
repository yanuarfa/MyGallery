/* eslint-disable prettier/prettier */
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';

import {images} from '../constants';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stackHeader}>
        <Text style={styles.stackText}>Login Page</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={images.umpLogo} style={styles.logo} />
      </View>
      <View style={styles.contentBody}>
        <Text style={styles.h2}>Login</Text>
        <TextInput style={styles.formInput} placeholder="Username" />
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Pressable
          style={styles.loginButton}
          onPress={() => console.log('Clicked')}>
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#393E46',
    fontFamily: 'Poppins-Regular',
  },
  stackHeader: {
    height: 50,
    backgroundColor: '#222831',
    justifyContent: 'center',
  },
  stackText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  contentBody: {
    marginTop: 20,
    flex: 3,
    alignItems: 'center',
  },
  h2: {
    fontSize: 18,
    margin: 10,
  },
  formInput: {
    borderWidth: 1,
    width: 350,
    padding: 12,
    borderRadius: 8,
    margin: 10,
  },
  loginButton: {
    margin: 20,
    padding: 15,
    borderRadius: 8,
    width: 150,
    backgroundColor: '#3282B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
