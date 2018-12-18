import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { fetchBooks, changeFilter, clearBooks } from "../actions/bookActions";
import Icon from "react-native-vector-icons/FontAwesome";

class ListHeaderTitle extends Component {
  state = {
    search: false
  };

  handleFilter = filter => {
    this.props.dispatch(changeFilter(filter));
  };

  handleSearchInput = () => {
    if (!this.state.search) {
      this.setState({ search: true });
    } else {
      this.props.dispatch(clearBooks());
      this.props.dispatch(fetchBooks());
      this.hideSearch();
    }
  };

  hideSearch = () => {
    if (this.state.search) {
      this.setState({ search: false });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          {!this.state.search ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="bars" size={24} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => this.hideSearch()}>
              <Icon name="arrow-left" size={24} />
            </TouchableOpacity>
          )}
        </View>
        {!this.state.search ? (
          <Text style={styles.textTitle}>List</Text>
        ) : (
          <TextInput
            style={styles.searchInput}
            value={this.props.filter}
            onChangeText={text => this.handleFilter(text)}
          />
        )}

        <View style={styles.searchIcon}>
          <TouchableOpacity onPress={() => this.handleSearchInput()}>
            <Icon name="search" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  menuContainer: {
    marginLeft: 15
  },
  searchInput: {
    height: 80,
    marginLeft: 20,
    fontSize: 18,
    maxWidth: 230
  },
  textTitle: { fontSize: 20 },
  searchIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15
  }
});

const mapStateToProps = state => ({
  filter: state.bookReducer.filter
});

export default connect(mapStateToProps)(ListHeaderTitle);
