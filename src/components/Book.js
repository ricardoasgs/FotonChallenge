import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

class Book extends Component {
  render() {
    const imageUrl = this.props.book.item.volumeInfo.imageLinks
      ? this.props.book.item.volumeInfo.imageLinks.smallThumbnail
      : null;
    return (
      <View style={styles.bookCard}>
        <Image source={{ uri: imageUrl }} style={styles.backgroundImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookCard: {
    width: 110,
    height: 145,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 18,
    backgroundColor: "white"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: 110,
    height: 145
  }
});

export default Book;
