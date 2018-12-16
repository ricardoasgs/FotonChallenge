import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#FFE207"
    },
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 15
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={24} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row"
          }}
        >
          <Text style={{ fontSize: 20 }}>Design Books</Text>
        </View>
      </View>
    )
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
