import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BookDetails from "../components/BookDetails";
import BookText from "../components/BookText";

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Icon name="bars" size={27} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20 }}>Detail</Text>

        <View style={{ marginRight: 15 }}>
          <TouchableOpacity onPress={() => console.log("This is a button!")}>
            <Icon name="search" size={27} />
          </TouchableOpacity>
        </View>
      </View>
    ),
    headerStyle: {
      backgroundColor: "#FFE207"
    }
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
