import React, { useState } from 'react';
import { Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Block, theme, Input, Text } from 'galio-framework';
import articles from '../constants/articles';
import { Feather as Icon } from '@expo/vector-icons';
import { useFonts, SourceSerifPro_400Regular } from '@expo-google-fonts/source-serif-pro';
import AppLoading from 'expo-app-loading';
import InboxScreen from './inbox';
import Profile from './testprofile';

const { width, height } = Dimensions.get('screen');

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedarticle, setselectedarticle] = useState(null);
  const [changeinbox, setchangeinbox] = useState(false);
  const [changeprofile, setprofile] = useState(false);
  const profilescreen = () => {
    setprofile(true);
    setchangeinbox(false);
  };
  
  const switchinbox = () => {
    setchangeinbox(true);
    setprofile(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const [fontsLoaded] = useFonts({
    SourceSerifPro_400Regular,
  });

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openArticle = (article) => {
    setselectedarticle(article);
  };

  const goback = () => {
    setselectedarticle(null);
  };
  console.log('Render Articles - changeinbox:', changeinbox, 'changeprofile:', changeprofile);
  const renderDrawer = () => (
    <Block style={styles.drawer}>
      {/* User profile section */}
      <Block style={styles.userProfile}>
        <Icon name="user" family="Feather" size={40} color={theme.COLORS.MUTED} style={styles.userIcon} />
        <Text style={styles.userName}>John Doe</Text>
      </Block>

      {/* Add your custom drawer items here */}
      <DrawerItem title="Home" onPress={() => openArticle(null)} />
      <DrawerItem title="About" onPress={closeDrawer} />
      <DrawerItem title="Contact Us" onPress={closeDrawer} />
      <DrawerItem title="Services" onPress={closeDrawer} />
      <DrawerItem title="Blog" onPress={closeDrawer} />

      {/* Logout option */}
      <DrawerItem title="Logout" icon="log-out" onPress={() => alert('Logout')} />
    </Block>
  );

  const renderArticles = () => (
    
    <ScrollView contentContainerStyle={styles.articles}>
      {selectedarticle ? (
        <TouchableOpacity onPress={goback}>
          {/* Render selected article details */}
          <Block style={styles.articleCard}>
            <Image source={{ uri: selectedarticle.image }} style={styles.thumbnailVertical} />
            <Text style={styles.title}>{selectedarticle.title}</Text>
            <Text style={styles.description}>{selectedarticle.description}</Text>

            {/* Additional styling for single article */}
            <Text style={styles.singleArticleContent}>{selectedarticle.content}</Text>
          </Block>
        </TouchableOpacity>
      ) : (
        // Render list of articles
        articles.map((article, index) => (
          <TouchableOpacity key={index} onPress={() => openArticle(article)}>
            <Block key={index} style={styles.articleCard}>
              {article.horizontal ? (
                <Block row>
                  <Image source={{ uri: article.image }} style={styles.thumbnailHorizontal} />
                  <Block flex style={styles.content}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text>{article.cta}</Text>
                  </Block>
                </Block>
              ) : (
                <Block>
                  <Image source={{ uri: article.image }} style={styles.thumbnailVertical} />
                  <Text style={styles.title}>{article.title}</Text>
                  <Text>{article.cta}</Text>
                </Block>
              )}
            </Block>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
  if (!changeinbox) {
    return (
      <Block flex style={styles.home}>
        <Block flex={0.1} style={styles.searchBarContainer}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Icon style={{ top: 25 }} name="menu" family="Feather" size={25} color={theme.COLORS.MUTED} />
          </TouchableOpacity>
        </Block>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity activeOpacity={1} onPress={closeDrawer} style={{ flex: 1 }}>
            <Block flex>
              {renderArticles()}
            </Block>
          </TouchableOpacity>
          {isDrawerOpen && renderDrawer()}
        </View>

        {/* Bottom Navigation Bar */}
        <Block style={styles.bottomNavBar}>
          <TouchableOpacity style={styles.bottomNavItem} onPress={() => openArticle(null)}>
            <Icon name="home" family="Feather" size={20} color={theme.COLORS.MUTED} />
            <Text style={styles.bottomNavText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={switchinbox}>
            <Icon name="inbox" family="Feather" size={20} color={theme.COLORS.MUTED} />
            <Text style={styles.bottomNavText}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem} onPress={profilescreen}>
            <Icon name="user" family="Feather" size={20} color={theme.COLORS.MUTED} />
            <Text style={styles.bottomNavText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavItem}>
            <Icon name="hash" family="Feather" size={20} color={theme.COLORS.MUTED} />
            <Text style={styles.bottomNavText}>Hashtags</Text>
          </TouchableOpacity>
        </Block>
      </Block>
    );
  } else if (changeprofile) {
    return (
<Profile/>)

  } else {
    return (
      <InboxScreen openArticle={openArticle} />
    );
  }
};


const DrawerItem = ({ title, onPress, icon }) => (
  <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
    <Block style={styles.drawerItemContent}>
      {icon && <Icon name={icon} family="Feather" size={20} color={theme.COLORS.MUTED} style={styles.drawerItemIcon} />}
      <Text style={styles.drawerItemText}>{title}</Text>
    </Block>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: width,
    height: height,
  },
  articles: {
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchInput: {
    borderRadius: theme.SIZES.BASE / 2,
    borderColor: theme.COLORS.MUTED,
    height: theme.SIZES.BASE * 2,
    width: width - 100,
    top: 25,
  },
  articleCard: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 20,
    borderRadius: theme.SIZES.BASE,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  thumbnailHorizontal: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: theme.SIZES.BASE,
    marginRight: 10,
  },
  thumbnailVertical: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: theme.SIZES.BASE,
  },
  drawerItemIcon: {
    marginRight: 0,
    left: 60,
    top: 19,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: 'rgba(0, 0, 0, 0.8)', // Customize the color as needed
  },
  singleArticleContent: {
    fontFamily: 'SourceSerifPro_400Regular',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.9)', // Customize the color as needed
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: height,
    backgroundColor: 'white',
    zIndex: 10,
    elevation: 10,
    paddingTop: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  drawerItemContent: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
    width: '100%',
  },
  drawerItemText: {
    fontSize: 16,
    color: 'rgba(20,50,20,0.5)',
    fontWeight: 'bold',

    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  userIcon: {
    marginRight: 14,
    borderColor: theme.COLORS.MUTED,
    borderWidth: 0.5,
    borderColor: 'rgba(20,50,20,0.5)',
    borderRadius: 15,
    padding: 1,
    bottom: 1,
  },
  userName: {
    fontSize: 17,
    color: 'rgba(20,5,2,1)',
    fontWeight: 'bold',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'gray',
    paddingVertical: 10,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    marginTop: 5,
    color: theme.COLORS.MUTED,
  },
});

export default Home;
