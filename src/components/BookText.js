import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class BookText extends Component {
  render() {
    const book = this.props.book.item;
    return (
      <View style={styles.textContainer}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>{book.volumeInfo.description}</Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 20
  },
  textContainer: {
    flex: 5,
    backgroundColor: "#FFF"
  },
  text: {
    fontSize: 15,
    lineHeight: 32,
    color: "#757B81"
  }
});

const mapStateToProps = state => ({
  book: state.bookReducer.book
});

export default connect(mapStateToProps)(BookText);
