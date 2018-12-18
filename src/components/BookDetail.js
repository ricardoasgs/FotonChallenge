import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";

import BookDetailFooter from "./BookDetailFooter";
import BookDetailContent from "./BookDetailContent";

class BookDetails extends Component {
  render() {
    const book = this.props.book.item;
    return (
      <View style={styles.infoContainer}>
        <BookDetailContent book={book} />
        <BookDetailFooter book={book} navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#FFE207",
    padding: 15,
    paddingVertical: 25
  }
});

const mapStateToProps = state => ({
  book: state.bookReducer.book
});

export default connect(mapStateToProps)(BookDetails);
