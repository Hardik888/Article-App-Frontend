import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Image } from 'react-native';
import { Block, theme, Input, Text } from 'galio-framework';
import articles from '../constants/articles';

const { width } = Dimensions.get('screen');

const Home = () => {
  const renderArticles = () => {
    return (
      <ScrollView contentContainerStyle={styles.articles}>
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
  };

  return (
    <Block flex style={styles.home}>
      <Block flex={0.1} style={styles.searchBarContainer}>
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
      <Block flex>
        {renderArticles()}
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  articles: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  searchBarContainer: {
    padding: 10,
    top:30,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  searchInput: {
    borderRadius: theme.SIZES.BASE / 2,
    borderColor: theme.COLORS.MUTED,
    height: theme.SIZES.BASE * 2,
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
});

export default Home;
