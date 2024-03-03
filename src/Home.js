// Home.js
import React, { useState } from 'react';
import { Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Block, theme, Input, Text, Icon } from 'galio-framework';
import articles from '../constants/articles';

const { width, height } = Dimensions.get('screen');

const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const renderDrawer = () => (
    <Block style={styles.drawer}>
      {/* User profile section */}
      <Block style={styles.userProfile}>
        <Icon name="user" family="Feather" size={40} color={theme.COLORS.MUTED} style={styles.userIcon} />
        <Text style={styles.userName}>John Doe</Text>
      </Block>

      {/* Add your custom drawer items here */}
      <DrawerItem title="Home" onPress={closeDrawer} />
      <DrawerItem title="About" onPress={closeDrawer} />
      <DrawerItem title="Contact Us" onPress={closeDrawer} />
      <DrawerItem title="Services" onPress={closeDrawer} />
      <DrawerItem title="Blog" onPress={closeDrawer} />
    </Block>
  );

  const renderArticles = () => (
    <ScrollView
      contentContainerStyle={styles.articles}
      onPress={isDrawerOpen ? closeDrawer : undefined}
    >
      {articles.map((article, index) => (
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
      ))}
    </ScrollView>
  );

  return (
    <Block flex style={styles.home}>
      <Block flex={0.1} style={styles.searchBarContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="menu" family="Feather" size={25} color={theme.COLORS.MUTED} />
        </TouchableOpacity>
        <Input
          placeholder="Search"
          right
          icon="search"
          family="EvilIcons"
          iconSize={16}
          iconColor={theme.COLORS.MUTED}
          style={styles.searchInput}
        />
      </Block>
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeDrawer}
        style={{ flex: 1, paddingTop: 20 }}
      >
        <Block flex>
          {renderArticles()}
        </Block>
      </TouchableOpacity>
      {isDrawerOpen && renderDrawer()}
    </Block>
  );
};

const DrawerItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
    <Block style={styles.drawerItemContent}>
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
    paddingVertical: 20,
    paddingHorizontal: 10,
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
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
    fontWeight: 'bold',
    color: theme.COLORS.MUTED,
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
    marginRight: 15,
    borderColor: theme.COLORS.MUTED,
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
