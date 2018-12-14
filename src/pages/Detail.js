import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BookDetails from "../components/BookDetails";
import BookText from "../components/BookText";

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#FFE207"
    },
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 20 }}>Detail</Text>
      </View>
    ),
    headerRight: (
      <View style={{ marginRight: 15 }}>
        <TouchableOpacity onPress={() => console.log("This is a button!")}>
          <Icon name="search" size={24} />
        </TouchableOpacity>
      </View>
    )
  });

  render() {
    return (
      <View style={styles.mainContainer}>
        <BookDetails />
        <BookText />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
export default Detail;
