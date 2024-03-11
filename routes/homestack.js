// homestack.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../app/Home';
import Profile from '../app/testprofile';
import Register from '../app/register';
import SplashScreen from '../app/SplashScreen';
import InboxScreen from '../app/inbox';
import HashtagScreen from '../app/HashtagsScreen';
import ContactUsScreen from '../app/Contact';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name = "SplashScreen" component ={SplashScreen}/>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name = "Home" component={Home} />
      <Stack.Screen name = "inbox" component = {InboxScreen}/>
      <Stack.Screen name = "HashtagsScreen" component={HashtagScreen}/>
      <Stack.Screen name = "Profile" component={Profile}/>
      <Stack.Screen name = "Contact" component={ContactUsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
