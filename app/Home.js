import React, { useState } from 'react';
import { Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Block, theme, Input, Text } from 'galio-framework';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import articles from '../constants/articles';
import { Feather as Icon } from '@expo/vector-icons';
import { useFonts, SourceSerifPro_400Regular } from '@expo-google-fonts/source-serif-pro';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');
const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedarticle, setselectedarticle] = useState(null);
  const [changeinbox, setchangeinbox] = useState(false);
  const [changeprofile, setprofile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation();

  const profilescreen = () => {
    navigation.navigate('Profile');
  };

  const hashtagscreen = () => {
    navigation.navigate('HashtagsScreen');
  };

  const switchinbox = () => {
    navigation.navigate('inbox');
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

  const logout = () => {
    navigation.navigate('SplashScreen');
  };

  const goback = () => {
    setselectedarticle(null);
  };

  const contactus = () => {
    navigation.navigate('Contact');
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
      <DrawerItem title="Contact Us" onPress={contactus} />
      <DrawerItem title="Services" onPress={closeDrawer} />
      <DrawerItem title="Blog" onPress={closeDrawer} />

      {/* Logout option */}
      <DrawerItem title="Logout" icon="log-out" onPress={logout} />
    </Block>
  );

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => openArticle(item)}>
      <Block key={item.id} style={styles.articleCard}>
        {item.horizontal ? (
          <Block row>
            <Image source={{ uri: item.image }} style={styles.thumbnailHorizontal} />
            <Block flex style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>{item.cta}</Text>
            </Block>
          </Block>
        ) : (
          <Block>
            <Image source={{ uri: item.image }} style={styles.thumbnailVertical} />
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.cta}</Text>
          </Block>
        )}
      </Block>
    </TouchableOpacity>
  );

  const renderArticlesCarousel = () => (
    <View style={styles.carouselContainer}>
      <Carousel
        data={articles}
        renderItem={renderCarouselItem}
        sliderWidth={width - 40}  // Adjusted width
        itemWidth={width - 80}   // Adjusted width
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={articles.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -15 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: theme.COLORS.MUTED,
        }}
        inactiveDotStyle={{
          backgroundColor: theme.COLORS.MUTED,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );

  const renderArticlesList = () => (
    <ScrollView contentContainerStyle={styles.articles}>
      {selectedarticle ? (
        <TouchableOpacity onPress={goback}>
          <Block style={styles.articleCard}>
            <Image source={{ uri: selectedarticle.image }} style={styles.thumbnailVertical} />
            <Text style={styles.title}>{selectedarticle.title}</Text>
            <Text style={styles.description}>{selectedarticle.description}</Text>
            <Text style={styles.singleArticleContent}>{selectedarticle.content}</Text>
          </Block>
        </TouchableOpacity>
      ) : (
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

  const renderHeader = () => (
    <Block style={styles.searchBarContainer}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon style={{ top: 25, marginRight: 20 }} name="menu" family="Feather" size={25} color={theme.COLORS.MUTED} />
      </TouchableOpacity>
      <Text style={styles.companyName}>Your Company Name</Text>
    </Block>
  );

  return (
    <Block flex style={styles.home}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <TouchableOpacity activeOpacity={1} onPress={closeDrawer} style={{ flex: 1 }}>
          <Block flex>
            {renderHeader()}
            {renderArticlesCarousel()}
            {renderArticlesList()}
          </Block>
        </TouchableOpacity>
        {isDrawerOpen && renderDrawer()}
      </View>

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
        <TouchableOpacity style={styles.bottomNavItem} onPress={hashtagscreen}>
          <Icon name="hash" family="Feather" size={20} color={theme.COLORS.MUTED} />
          <Text style={styles.bottomNavText}>Hashtags</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
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
    backgroundColor: 'white',
  },
  articles: {
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  searchBarContainer: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: -10,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.COLORS.MUTED,
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
    color: 'rgba(0, 0, 0, 0.8)',
  },
  singleArticleContent: {
    fontFamily: 'SourceSerifPro_400Regular',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 10,
    color: 'rgba(0, 0, 0, 0.9)',
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
  carouselContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.COLORS.MUTED,
  },
});

export default Home;
