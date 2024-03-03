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

const { width, height } = Dimensions.get("screen");

const Register = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");

  const handleCreateAccount = () => {
    // Implement OTP verification logic here
    // You may want to call a backend API to send OTP and verify it
    console.log("Mobile Number:", mobileNumber);
    console.log("OTP:", otp);
  };

  return (
    <Block flex middle>
      <StatusBar hidden />
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={0.17} middle>
              <Text color="#8898AA" size={12}>
                Sign up with your mobile number
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
                        // <Icon
                        //     size={16}
                        //     color={argonTheme.COLORS.ICON}
                        //     name="ic_mail_24px"
                        //     family="ArgonExtra"
                        //     style={styles.inputIcons}
                        //   />
                        <Text>+91 </Text>
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
                    style={styles.createButton}
                    onPress={handleCreateAccount}
                  >
                    <Text bold size={15} color={'black'}>
                      Generate OTP
                    </Text>
                  </Button>
                </Block>
              </KeyboardAvoidingView>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
};

const styles = StyleSheet.create({
    registerContainer: {
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
      createButton: {
        width: width * 0.5,
        marginTop: 55,
        borderRadius:100,
      }
});

export default Register;
