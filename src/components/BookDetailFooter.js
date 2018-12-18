import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const BookDetailFooter = props => {
  const { book } = props;
  return (
    <View style={styles.footerBookContainer}>
      <View style={styles.pages}>
        <Text style={styles.pageText}>{book.volumeInfo.pageCount} Pages</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => {
            props.navigation.navigate("Buy");
          }}
        >
          <Text style={styles.buyText}>BUY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => console.log("Clicked")}
        >
          <Icon name="heart" size={17} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerBookContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 25
  },
  pages: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pageText: {
    fontSize: 16,
    color: "#CDB308"
  },
  options: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  },
  buyButton: {
    marginRight: 10,
    width: 130,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#549AE6",
    alignItems: "center",
    justifyContent: "center"
  },
  buyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF"
  },
  heartButton: {
    width: 40,
    height: 40,
    borderRadius: 80,
    backgroundColor: "#E05568",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default BookDetailFooter;
