import React, { useState } from "react";
import { StyleSheet, ImageBackground, Dimensions, StatusBar, KeyboardAvoidingView, View, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const RegisterScreen = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const navigation = useNavigation();

  const handleCreateAccount = () => {
    navigation.navigate('Home');
  };

  return (
    <Block flex>
      <StatusBar hidden />
      <Block style={styles.header}>
        {/* Your company logo */}
        <Image source={require('./complogo.png')} style={styles.logo} />
      </Block>
      <ImageBackground
        source={Images.RegisterBackground}
        style={{ width, height, zIndex: 1 }}
      >
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={0.17} middle>
              <Text color="#8898AA" size={12}>
                {/* Sign up with your mobile number */}
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
                    iconContent={<Text>+91 </Text>}
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
                      Login
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
  header: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    top:30,
    height: 80,
    resizeMode: 'contain',
  },
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
  },
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    width: width * 0.5,
    marginTop: 55,
    borderRadius: 100,
  }
});

export default RegisterScreen;
