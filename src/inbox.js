import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { Block, Text } from 'galio-framework';
import { FontAwesome } from '@expo/vector-icons';
import articles from '../constants/articles';
import Home from './Home';

const InboxScreen = ({ openArticle }) => {
  const [showHome, setShowHome] = useState(false);

  const goBack = () => {
    setShowHome(true);
  };

  if (showHome) {
    return <Home openArticle={openArticle} />;
  }

  return (
    <Block>
      {/* Inbox Screen */}
      <>
        {/* Header */}
        <Block style={styles.header}>
          <Text style={styles.headerText}>Inbox</Text>
        </Block>

        {/* Articles */}
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          {articles.map((article, index) => (
            <TouchableOpacity key={index} onPress={() => openArticle(article)}>
              <Block key={index} style={styles.articleCard}>
                <Image source={{ uri: article.image }} style={styles.thumbnail} />
                <Block style={styles.textContainer}>
                  <Text style={styles.provider}>{article.provider}</Text>
                  <Text style={styles.title}>{article.title}</Text>
                  <Text style={styles.description} numberOfLines={2}>{article.description}</Text>
                  <TouchableOpacity onPress={() => openArticle(article)}>
                    <Text style={styles.readMore}>Read More</Text>
                  </TouchableOpacity>
                  <Block style={styles.footer}>
                    <Text style={styles.date}>{getFormattedDate(article.date)}</Text>
                  </Block>
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
};

const getFormattedDate = (dateString) => {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const styles = {
  header: {
    backgroundColor: 'white',
    padding: 40,
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  headerText: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
  },
  articleCard: {
    backgroundColor: 'white',
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  provider: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.8)',
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 5,
  },
  readMore: {
    color: '#3498db',
    fontWeight: 'bold',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  date: {
    color: 'rgba(0, 0, 0, 0.5)',
    textAlign: 'right',
  },
  backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    zIndex: 1,
  },
};

export default InboxScreen;
