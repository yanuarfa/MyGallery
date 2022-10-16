/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    width: 400,
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoPlaceholder: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
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
