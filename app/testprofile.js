import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Block, Text, theme, Button } from "galio-framework";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

const Profile = () => {
  const [showMore, setShowMore] = useState(false);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack('Home')  
  };
  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={Images.ProfileBackground}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: "25%" }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={{ uri: Images.ProfilePicture }}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.info}>
                <Text bold size={18} color="#525F7F" style={{ marginTop: 20 }}>
                  Username
                </Text>
                <Text size={16} color="#525F7F" style={{ marginBottom: 10 }}>
                  user123
                </Text>

                <Text bold size={18} color="#525F7F">
                  Email
                </Text>
                <Text size={16} color="#525F7F" style={{ marginBottom: 10 }}>
                  user123@example.com
                </Text>

                {/* Additional information with "Show more" button */}
                {showMore && (
                  <>
                    <Text bold size={18} color="#525F7F">
                      Additional Info
                    </Text>
                    <Text size={16} color="#525F7F" style={{ marginBottom: 10 }}>
                      Some additional details about the user.
                    </Text>
                  </>
                )}

                <Button
                  color="transparent"
                  textStyle={{
                    color: "#233DD2",
                    fontWeight: "500",
                    fontSize: 16,
                    left:30,
                  }}
                  onPress={() => setShowMore(!showMore)}
                >
                  {showMore ? "Show less" : "Show more"}
                </Button>
              </Block>
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
      <TouchableOpacity style={styles.backButton} onPress={goBack} >
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
    </Block>
  );
};


const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    flex: 1,
    borderTopColor:'gold',
    borderTopWidth:50,
    borderRadius:50,
  }, backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    zIndex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 105,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
    right:120,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  thumb: {
    borderRadius: 15,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default Profile;
