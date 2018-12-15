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

import { fetchBooks } from "../actions/bookActions";

class List extends Component {
  state = {
    index: 0,
    width: 0
  };

  static navigationOptions = ({ navigation }) => ({
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
            style={{ height: 40, width: 0 }}
            value="Type here to translate!"
            onChangeText={text => console.log(text)}
          />

          <TouchableOpacity onPress={() => console.log("Clicked")}>
            <Icon name="search" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    )
  });

  loadMore = () => {
    const { index } = this.state;
    const newIndex = index + 15;
    this.setState({ index: newIndex });
    if (newIndex <= this.props.maxBooks)
      this.props.dispatch(fetchBooks(newIndex));
  };

  componentDidMount() {
    const { index } = this.state;
    this.props.dispatch(fetchBooks());
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
  maxBooks: state.bookReducer.maxBooks,
  filter: state.bookReducer.filter
});

export default connect(mapStateToProps)(List);
