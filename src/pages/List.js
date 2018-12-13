import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Book from "../components/Book";

import { fetchBooks } from "../actions/bookActions";

class List extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="bars" size={27} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 20 }}>List</Text>

        <View style={{ marginRight: 15 }}>
          <TouchableOpacity onPress={() => console.log("This is a button!")}>
            <Icon name="search" size={27} />
          </TouchableOpacity>
        </View>
      </View>
    ),
    headerStyle: {
      backgroundColor: "#FFE207"
    }
  });

  state = {
    filter: null,
    index: 0
  };

  loadMore = () => {
    const { index, filter } = this.state;
    const newIndex = index + 15;
    this.setState({ index: newIndex });
    if (newIndex <= this.props.maxBooks)
      this.props.dispatch(fetchBooks(filter, newIndex));
  };

  componentDidMount() {
    const { filter, index } = this.state;
    this.props.dispatch(fetchBooks(filter, index));
  }

  render() {
    const { books } = this.props;
    return (
      <View style={styles.mainContainer}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={books}
          keyExtractor={book => book.id}
          renderItem={book => (
            <Book book={book} navigation={this.props.navigation} />
          )}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFE207",
    flexWrap: "wrap"
  }
});

const mapStateToProps = state => ({
  books: state.bookReducer.books,
  maxBooks: state.bookReducer.maxBooks
});

export default connect(mapStateToProps)(List);
