import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ navigation }) => {
  const [bottomTabIndex, setBottomTabIndex] = useState(0);

  const renderScene = (routeKey) => {
    switch (routeKey) {
      case 'home':
        return (
          <View style={[styles.scene, { backgroundColor: '#fff' }]}>
            <Icon name="home" size={30} color="#000" style={styles.navicon} />
          </View>
        );
      case 'profile':
        return (
          <View style={[styles.scene, { backgroundColor: '#fff' }]}>
            <Icon name="account" size={30} color="#000" style={styles.navicon} />
          </View>
        );
      case 'settings':
        return (
          <View style={[styles.scene, { backgroundColor: '#fff' }]}>
            <Icon name="cog" size={30} color="#000" style={styles.navicon} />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Card Section */}
      <View style={styles.card}>
        <View style={styles.userInfoSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Test User</Text>
            <View style={styles.emailContainer}>
              <Icon name="email" size={20} color="rgba(200,180,100,1)" style={styles.emailIcon} />
              <Text style={styles.caption}>testuser@example.com</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => setBottomTabIndex(0)}
        >
          <Icon
            name="home"
            size={30}
            color={bottomTabIndex === 0 ? '#fff' : '#000'}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => setBottomTabIndex(1)}
        >
          <Icon
            name="account"
            size={30}
            color={bottomTabIndex === 1 ? '#fff' : '#000'}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomNavItem}
          onPress={() => setBottomTabIndex(2)}
        >
          <Icon
            name="cog"
            size={30}
            color={bottomTabIndex === 2 ? '#fff' : '#000'}
            style={styles.bottomNavIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Render Scene */}
      {renderScene(bottomTabIndex)}
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 11,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopWidth: 2,
    borderTopColor: 'rgba(200,180,100,1)',
    borderBottomColor: 'black',
    top: 60,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(200,180,100,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 30,
    color: 'white',
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgba(200,180,100,1)',
  },
  caption: {
    fontSize: 13,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    marginRight: 5,
  },
  scene: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(200,180,100,1)',
    paddingBottom: 10,
  },
  bottomNavItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  bottomNavIcon: {
    alignSelf: 'center',
  },
});

export default ProfileScreen;
