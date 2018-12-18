import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const HomeHeaderTitle = props => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Icon name="bars" size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.textTitle}>Design Books</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  menuContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 15
  },
  titleContainer: {
    flex: 2,
    flexDirection: "row"
  },
  textTitle: { fontSize: 20 }
});

export default HomeHeaderTitle;
