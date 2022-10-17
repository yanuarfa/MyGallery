/* eslint-disable prettier/prettier */
import { Text, View, Image, TextInput, Pressable } from "react-native";
import React from "react";

import { images } from "../constants";
import styles from "../../styles";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stackHeader}>
        <Text style={styles.stackText}>Cloud Gallery</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image source={images.galleryLogo} style={styles.logo} />
        <Text style={styles.logoPlaceholder}>
          Great Place to Save Your Memories.
        </Text>
      </View>
      <View style={styles.contentBody}>
        <Text style={styles.h2}>Login</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Username"
          autoCorrect={false}
        />
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Pressable
          style={styles.loginButton}
          onPress={() => console.log("Clicked")}
        >
          <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
