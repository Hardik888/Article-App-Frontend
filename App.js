import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './app/testprofile';
import Register from './app/register';
import Home from './app/Home';
import InboxScreen from './app/inbox';
import SplashScreen from './app/SplashScreen';
import HashtagsScreen from './app/HashtagsScreen';
import ContactUsScreen from './app/Contact';
import Navigator from './routes/homestack';

export default function App() {




  return (
  <Navigator/>
  );
}

