import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Button,
  Text,
} from 'react-native';

const NewDeviceLoginScreen = () => {
  const [verificationCode, setVerificationCode] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleLogin = () => {
    // Login logic here (e.g., validate verification code and set a new password)
    if (verificationCode === '123456') {
      console.log('Login successful');
    } else {
      setSnackbarVisible(true);
    }
  };

  const handleResendOTP = () => {
    // Resend OTP logic here (e.g., send a new OTP to the user's email/phone)
    console.log('Resending OTP...');
    // Add your resend OTP logic here
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>ENTER THE OTP</Text>
            <TextInput
              value={verificationCode}
              onChangeText={(text) => setVerificationCode(text)}
              style={styles.input}
              keyboardType="numeric"
            />
            <Button onPress={handleLogin} title="Login" color="rgba(200,180,0,1)" />
            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>Didn't receive OTP?</Text>
              <Button onPress={handleResendOTP} title="Resend OTP" color="rgba(200,180,0,1)" />
            </View>
          </View>
        </View>
      </ScrollView>
      {snackbarVisible && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>Invalid verification code or password</Text>
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
    padding: 5,
  },
  card: {
    padding: 21,
    borderWidth: 2,
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'rgba(200,180,100,1)',
    borderBottomWidth: 0.4,
    backgroundColor: 'white',
    width: '100%',
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'rgba(200,180,100,1)',
    textShadowColor: 'rgba(10, 0, 0, 0.1)',
    textShadowOffset: { width: 0.1, height: 0.1 },
    textShadowRadius: 1,
  },
  input: {
    textAlign: 'center',
    borderWidth: 0.3,
    width: '50%',
    borderRadius: 20,
    paddingVertical: 8,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgba(200,180,100,1)',
  },
  resendContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    marginRight: 10,
    fontSize: 16,
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

export default NewDeviceLoginScreen;
