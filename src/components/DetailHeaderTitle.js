import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailHeaderTitle = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  text: { fontSize: 20 }
});

export default DetailHeaderTitle;
