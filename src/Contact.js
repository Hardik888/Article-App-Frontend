import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { Block, Input, Button, Text } from 'galio-framework';

const { width, height } = Dimensions.get('screen');

const ContactUsScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Add your logic to handle sending the message
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <Block>
      {/* Map at the Top */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749, // Replace with your map coordinates
            longitude: -122.4194, // Replace with your map coordinates
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      {/* Contact Form at the Bottom */}
      <Block style={styles.contactForm}>
        <Text style={styles.formTitle}>Contact Us</Text>

        {/* Name Input */}
        <Input
          placeholder="Your Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />

        {/* Email Input */}
        <Input
          placeholder="Your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        {/* Message Input */}
        <Input
          placeholder="Your Message"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
        />

        {/* Send Message Button */}
        <Button onPress={handleSendMessage} style={styles.sendButton}>
          Send Message
        </Button>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: height * 0.4,
    backgroundColor: '#f0f0f0', // Set a background color for the map container
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contactForm: {
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  sendButton: {
    backgroundColor: '#3498db', // Set a background color for the button
  },
});

export default ContactUsScreen;
