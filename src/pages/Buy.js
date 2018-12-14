import React, { Component } from "react";
import { connect } from "react-redux";
import { WebView, View, Text } from "react-native";

class Buy extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#FFE207"
    },
    headerTitle: (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 60
        }}
      >
        <Text style={{ fontSize: 20 }}>Buy</Text>
      </View>
    )
  });

  render() {
    console.log(this.props.book);
    return (
      <WebView
        source={{ uri: this.props.book.item.accessInfo.webReaderLink }}
      />
    );
  }
}

const mapStateToProps = state => ({
  book: state.bookReducer.book
});

export default connect(mapStateToProps)(Buy);
