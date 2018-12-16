import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Book from "../components/Book";

import { fetchBooks, changeFilter, clearBooks } from "../actions/bookActions";

class List extends Component {
  state = {
    index: 0,
    width: 0
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerStyle: {
        backgroundColor: "#FFE207"
      },
      headerTitle: (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              marginLeft: 15
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={24} />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 20 }}>List</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15
            }}
          >
            <TextInput
              style={{
                height: 80,
                width: params.width,
                marginLeft: 20
              }}
              value={params.filter}
              onChangeText={text => params.handleFilter(text)}
            />

            <TouchableOpacity onPress={() => params.updateWidth()}>
              <Icon name="search" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      )
    };
  };
  componentDidMount() {
    this.props.dispatch(fetchBooks());
    this.props.navigation.setParams({
      width: this.state.width,
      updateWidth: this.updateWidth,
      filter: this.props.filter,
      handleFilter: this.handleFilter
    });
  }

  loadMore = () => {
    const { index } = this.state;
    const newIndex = index + 15;
    this.setState({ index: newIndex });
    if (newIndex <= this.props.maxBooks)
      this.props.dispatch(fetchBooks(newIndex));
  };

  updateWidth = () => {
    let newValue;
    if (this.state.width == 0) {
      newValue = 130;
    } else {
      newValue = 0;
      this.props.dispatch(clearBooks());
      this.props.dispatch(fetchBooks());
    }
    this.setState({ width: newValue });
    this.props.navigation.setParams({ width: newValue });
  };

  handleFilter = filter => {
    this.props.navigation.setParams({ filter });
    this.props.dispatch(changeFilter(filter));
    console.log(filter);
  };

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
  maxBooks: state.bookReducer.maxBooks,
  filter: state.bookReducer.filter
});

export default connect(mapStateToProps)(List);
