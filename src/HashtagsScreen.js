import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Block, Text } from 'galio-framework';
import { FontAwesome } from '@expo/vector-icons';
import Home from './Home';
import articles from '../constants/articles';

const { width } = Dimensions.get('screen');

const HashtagScreen = ({ openArticle }) => {
    const [showHome, setShowHome] = useState(false);
  
    const goBack = () => {
      setShowHome(true);
    };
  
    if (showHome) {
      return <Home openArticle={openArticle} />;
    }
  
    return (
      <Block>
        {/* Hashtag Screen */}
        <>
          {/* Header */}
          <Block style={styles.header}>
            <Text style={styles.headerText}>Hashtags</Text>
          </Block>
  
          {/* Hashtags and Thumbnails */}
          <ScrollView contentContainerStyle={styles.articlesContainer}>
            {articles.map((article, index) => (
              <TouchableOpacity key={index} onPress={() => openArticle(article)}>
                <Block style={styles.thumbnailContainer}>
                  <Image source={{ uri: article.image }} style={styles.thumbnail} />
                  {/* Hashtag Card */}
                  <Block style={styles.hashtagCard}>
                    {article.hashtags &&
                      article.hashtags.map((hashtag, idx) => (
                        <Text key={idx} style={styles.hashtagText}>{`#${hashtag}`}</Text>
                      ))}
                  </Block>
                </Block>
              </TouchableOpacity>
            ))}
          </ScrollView>
  
          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={goBack}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </>
      </Block>
    );
  }

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    padding: 40,
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  hashtagCard: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
  },
  articlesContainer: {
    padding: 10,
  },
  thumbnailContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 5,
    marginBottom: 10,
  },
  hashtagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    width: '100%',
    justifyContent: 'flex-start',
  },
  hashtagText: {
    marginRight: 5,
    color: '#3498db',
  },
  backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    zIndex: 1,
  },
});

export default HashtagScreen;
