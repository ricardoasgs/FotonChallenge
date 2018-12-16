import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { AirbnbRating } from "react-native-ratings";

class BookDetails extends Component {
  getUrl = () => {
    const book = this.props.book.item;
    return book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.smallThumbnail
      : null;
  };

  renderAuthors = () => {
    const authors = this.props.book.item.volumeInfo.authors;
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
    const book = this.props.book.item;
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
    const book = this.props.book.item;
    console.log(book);
    return (
      <View style={styles.infoContainer}>
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
        <View style={styles.footerBookContainer}>
          <View style={styles.pages}>
            <Text style={styles.pageText}>
              {book.volumeInfo.pageCount} Pages
            </Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => {
                this.props.navigation.navigate("Buy");
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  infoContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#FFE207",
    padding: 15
  },
  bookContainer: {
    flex: 5,
    flexDirection: "row"
  },
  book: {
    flex: 1,
    backgroundColor: "white"
  },
  description: {
    flex: 2,
    marginLeft: 20
  },
  descriptionTitle: {
    fontSize: 23,
    fontWeight: "bold"
  },
  descriptionAuthor: {
    fontSize: 16,
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
  footerBookContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: 10
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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  }
});

const mapStateToProps = state => ({
  book: state.bookReducer.book
});

export default connect(mapStateToProps)(BookDetails);
