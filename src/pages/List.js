import React, { Component } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";

import Book from "../components/Book";

import { fetchBooks, clearBooks } from "../actions/bookActions";
import ListHeaderTitle from "../components/ListHeaderTitle";

class List extends Component {
  state = {
    index: 0
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        backgroundColor: "#FFE207"
      },
      headerTitle: <ListHeaderTitle navigation={navigation} params={params} />
    };
  };

  componentDidMount() {
    this.props.dispatch(fetchBooks());
  }

  loadMore = () => {
    const { index } = this.state;
    const newIndex = index + 15;
    this.setState({ index: newIndex });
    if (newIndex <= this.props.maxBooks)
      this.props.dispatch(fetchBooks(newIndex));
  };

  refresh = () => {
    this.setState({ index: 0 });
    this.props.dispatch(clearBooks());
    this.props.dispatch(fetchBooks());
  };

  render() {
    const { books, refreshing } = this.props;
    console.log(refreshing);
    return (
      <View style={styles.mainContainer}>
        <FlatList
          horizontal={false}
          numColumns={3}
          data={books}
          refreshing={refreshing}
          onRefresh={() => this.refresh()}
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
  maxBooks: state.bookReducer.maxBooks,
  filter: state.bookReducer.filter,
  refreshing: state.bookReducer.refreshing
});

export default connect(mapStateToProps)(List);
