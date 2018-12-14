import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class BookDetails extends Component {
  render() {
    return (
      <View style={styles.infoContainer}>
        <View style={styles.bookContainer}>
          <View style={styles.book} />
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>
              Logo Design Love: A Guide to Creating Iconic Brand Identities
            </Text>
            <Text style={styles.descriptionAuthor}>by David Airey</Text>
            <View style={styles.containerPrice}>
              <Text style={styles.descriptionTitle}>$9.99</Text>
              <Text style={styles.descriptionTitle}>***</Text>
            </View>
          </View>
        </View>
        <View style={styles.footerBookContainer}>
          <View style={styles.pages}>
            <Text style={styles.pageText}>216 Pages</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={() => console.log("Clicked")}
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
    flex: 3,
    flexDirection: "row"
  },
  book: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  description: {
    flex: 2,
    marginLeft: 20
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionAuthor: {
    fontSize: 16,
    color: "#CDB308"
  },
  containerPrice: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  descriptionPrice: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold"
  },
  footerBookContainer: {
    flex: 1,
    flexDirection: "row"
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

const mapStateToProps = state => ({
  book: state.bookReducer.book
});

export default connect(mapStateToProps)(BookDetails);
