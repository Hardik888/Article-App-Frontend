import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import Home from "./Home";
const { width, height } = Dimensions.get("screen");

const NewUserLogin = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [changetohome,setchangetohome] = useState(false);

  const onscreenchange = () => {
    setchangetohome(true);
  }
  const handleGenerateOTP = () => {
    // Implement OTP generation logic here
    console.log("Mobile Number:", mobileNumber);
    // Generate and send OTP to the user
  };

  const handleLogin = () => {
    // Implement OTP verification logic here
    console.log("Mobile Number:", mobileNumber);
    console.log("OTP:", otp);
    // Verify OTP and log the user in
  };
if (changetohome)
 {
  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.loginContainer}>
            <Block flex={0.17} middle>
              <Text color="#8898AA" size={12}>
                New User Login
              </Text>
            </Block>
            <Block flex center>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior="padding"
                enabled
              >
                <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                  <Input
                    borderless
                    placeholder="Mobile Number"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="mobile"
                        family="FontAwesome"
                        style={styles.inputIcons}
                      />
                    }
                    keyboardType="numeric"
                    onChangeText={(text) => setMobileNumber(text)}
                  />
                </Block>
                <Block width={width * 0.8}>
                  <Input
                    borderless
                    placeholder="OTP"
                    iconContent={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="lock"
                        family="FontAwesome"
                        style={styles.inputIcons}
                      />
                    }
                    keyboardType="numeric"
                    onChangeText={(text) => setOtp(text)}
                  />
                </Block>
                <Block middle>
                  <Button
                    color="white"
                    style={styles.generateOTPButton}
                    onPress={onscreenchange}
                  >
                    <Text bold size={15} color={'black'}>
                      Generate OTP
                    </Text>
                  </Button>
                  {/* <Button
                    color="primary"
                    style={styles.loginButton}
                    onPress={onscreenchange}
                  >
                    <Text bold size={15} color={argonTheme.COLORS.WHITE}>
                      LOGIN
                    </Text>
                  </Button> */}
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
}
else {
  return (
    <Home/>
  )
}
}
const styles = StyleSheet.create({
  loginContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: "transparent",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  inputIcons: {
    marginRight: 12
  },
  generateOTPButton: {
    width: width * 0.5,
    marginTop: 15,
    borderRadius: 100,
    backgroundColor: argonTheme.COLORS.WARNING,
  },
  loginButton: {
    width: width * 0.5,
    marginTop: 15,
    borderRadius: 100,
  }
});

export default NewUserLogin;
