import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

import { selectBook } from "../actions/bookActions";

class Book extends Component {
  getUrl = () => {
    const book = this.props.book.item;
    return book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.smallThumbnail
      : null;
  };

  getDetails = () => {
    this.props.dispatch(
      selectBook(this.props.book, () =>
        this.props.navigation.navigate("Detail")
      )
    );
  };

  render() {
    return (
      <TouchableOpacity onPress={() => this.getDetails()}>
        <View style={styles.bookCard}>
          <Image
            source={{ uri: this.getUrl() }}
            style={styles.backgroundImage}
          />
        </View>
      </TouchableOpacity>
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

export default connect(null)(Book);
