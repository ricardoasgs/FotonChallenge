import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { AirbnbRating } from "react-native-ratings";

class BookDetailContent extends Component {
  getUrl = () => {
    const book = this.props.book;
    return book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.smallThumbnail
      : null;
  };

  renderAuthors = () => {
    const authors = this.props.book.volumeInfo.authors;
    if (!authors) {
      return <Text style={styles.descriptionAuthor}>By an unknown author</Text>;
    } else {
      if (authors.length === 1) {
        return <Text style={styles.descriptionAuthor}>By {authors}</Text>;
      } else {
        return authors.map((author, index) => (
          <Text key={index} style={styles.descriptionAuthor}>
            By {author}
          </Text>
        ));
      }
    }
  };

  renderCost = () => {
    const book = this.props.book;
    if (book.saleInfo.saleability === "FOR_SALE") {
      return (
        <Text style={styles.descriptionTitle}>
          {book.saleInfo.retailPrice.currencyCode}{" "}
          {book.saleInfo.retailPrice.amount}
        </Text>
      );
    } else {
      return <Text style={styles.descriptionPrice}>Not for Sale</Text>;
    }
  };

  render() {
    const { book } = this.props;
    return (
      <View style={styles.bookContainer}>
        <View style={styles.book}>
          <Image
            source={{ uri: this.getUrl() }}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>{book.volumeInfo.title}</Text>
          {this.renderAuthors()}
          <View style={styles.containerPrice}>
            {this.renderCost()}
            <AirbnbRating
              count={5}
              showRating={false}
              defaultRating={3}
              size={18}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookContainer: {
    flex: 6,
    flexDirection: "row"
  },
  book: {
    flex: 1,
    marginVertical: 7,
    backgroundColor: "#FFE207",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 5 },
    elevation: 20
  },
  description: {
    flex: 2,
    marginLeft: 20
  },
  descriptionTitle: {
    fontSize: 21,
    fontWeight: "bold"
  },
  descriptionAuthor: {
    fontSize: 14,
    color: "#CDB308"
  },
  containerPrice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  descriptionPrice: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  }
});

export default BookDetailContent;
