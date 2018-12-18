import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeHeaderTitle from "../components/HomeHeaderTitle";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#FFE207"
    },
    headerTitle: <HomeHeaderTitle navigation={navigation} />
  });

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <Icon name="book" size={250} />
        </View>
        <Text style={styles.welcomeMessage}>
          Welcome to Awesome Library App!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFE207",
    flexDirection: "column",
    alignItems: "center"
  },
  iconContainer: {
    flex: 5,
    justifyContent: "flex-end"
  },
  welcomeMessage: {
    flex: 3,
    fontSize: 22,
    fontWeight: "bold"
  }
});

export default Home;
