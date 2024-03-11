// SplashScreen.js
import React, { useState } from "react";
import { StyleSheet, Dimensions, StatusBar, ImageBackground } from "react-native";
import { Block, Text, theme } from "galio-framework";
import Swiper from "react-native-swiper";
import { Images, argonTheme } from "../constants";
import { Button } from "../components";
import Register from "./register";
const { width, height } = Dimensions.get("screen");

// Import the splash image
import splashImage from "../assets/imgs/bg.png";
import {useNavigation} from '@react-navigation/native';


const WelcomeImage = ({ image }) => (
  <Block style={styles.slide}>
    <ImageBackground source={image} style={{ width:"120%", height, zIndex: 1 }} />
  </Block>
);

const SplashScreen = () => {

const navigation = useNavigation();
const onchangescreen = () => {
    navigation.navigate('Register');
}

  return (
    <Block flex middle>
      <StatusBar hidden />
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={false}>
        {/* Use the imported splash image */}
        <WelcomeImage image={splashImage} />
        <WelcomeImage image={Images.WelcomeImage2} />
        {/* Add more WelcomeImage components with different images as needed */}
      </Swiper>
      <Block safe flex middle style={styles.splashContainer}>
        <Text h1 color="white" style={{ marginBottom: theme.SIZES.BASE }}>
        Welcome to Goldfinch Capital Solutions
        </Text>
        <Text h3 color="white" style={{ marginBottom: theme.SIZES.BASE }}>
          Lets have a look
        </Text>
        <Block style={styles.buttonContainer}>
          <Button  color="white" onPress={onchangescreen} style={styles.loginButton} >
            <Text bold size={15} color={argonTheme.COLORS.PRIMARY}>
              Login
            </Text>
          </Button >
          <Button color="white" style={styles.signUpButton}>
            <Text bold size={15} color={argonTheme.COLORS.PRIMARY}>
              Sign Up
            </Text>
          </Button>
        </Block>
      </Block>
    </Block>
  );

}
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashContainer: {
    position: "absolute",
    width: width * 0.85,
    height: height * 0.85,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: theme.SIZES.BASE,
  },
  loginButton: {
    flex: 1,
    left: -5,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 8,
  },
  signUpButton: {
    flex: 1,
    right: -5,
    marginLeft: theme.SIZES.BASE / 2,
    borderRadius: 8,
  },
});

export default SplashScreen;
