/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={{flexDirection: 'column', height: 100, padding: 20, flex: 1}}>
      <View style={{backgroundColor: 'salmon', flex: 3}}>
        <Text>Container 1</Text>
      </View>
      <View style={{backgroundColor: 'skyblue', flex: 1}}>
        <Text>Container 1</Text>
      </View>
      <View style={{backgroundColor: 'orange', flex: 1}}>
        <Text>Container 1</Text>
      </View>
    </View>
  );
};

export default App;
