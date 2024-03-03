import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  TextInput,
  Button,
  Text,
} from 'react-native';

const logo = require('../assets/logo.png');

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleLogin = () => {
    // Login logic here
    if (username === 'user' && password === 'password') {
      console.log('Login successful');
    } else {
      setSnackbarVisible(true);
    }
  };

  const handleRegister = () => {
    // Navigate to the registration screen or perform any other action
    console.log('Navigate to the registration screen');
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen or perform any other action
    console.log('Navigate to the forgot password screen');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={logo} style={styles.logo} />
            <TextInput
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.input}
              placeholder="+91 "
            />
            <Button
              onPress={handleLogin}
              title="Generate OTP"
              
              color="rgba(200,180,100,1)"
            />
            <View style={styles.buttonContainer}>
              <Text onPress={handleRegister} style={styles.linkText}>
                Register
              </Text>
              <Text onPress={handleForgotPassword} style={styles.linkText}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.poweredBy}>
          Powered by Goldfinch Capital Solutions
        </Text>
      </ScrollView>
      {snackbarVisible && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>
            Invalid username or password
          </Text>
          <Button onPress={() => setSnackbarVisible(false)} title="Close" />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  card: {
    padding: 20,

    borderLeftColor: 'black',
    borderRightColor: 'black',
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
    borderTopColor: 'rgba(200,180,100,1)',
    borderBottomWidth:0.5,
    borderTopWidth:1.5,
    backgroundColor: 'white',
    width: '100%',
    borderRadius:30,
  },
  cardContent: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'flex-start', // Align logo to the left
  },
  input: {
    width: '100%',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderColor: 'rgba(200,180,100,1)',
    paddingVertical: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%', // Ensure buttons span the full width
  },
  linkText: {
    color: 'rgba(200,180,100,1)',
    textDecorationLine: 'underline',
  },
  poweredBy: {
    top: 250,
    fontSize: 12,
    color: 'rgba(200,180,100,1)',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  snackbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  snackbarText: {
    color: 'white',
    marginRight: 16,
  },
});

export default LoginScreen;
