import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class List extends Component {
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
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={27} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20 }}>List</Text>

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
      <ScrollView style={styles.mainContainer}>
        <View style={styles.bookContainer}>
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
          <View style={styles.bookCard} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFE207"
  },
  bookContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  bookCard: {
    width: 110,
    height: 145,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 18,
    backgroundColor: "black"
  }
});
export default List;
