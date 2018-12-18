import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import BookDetail from "../components/BookDetail";
import BookText from "../components/BookText";
import DetailHeaderTitle from "../components/DetailHeaderTitle";

class Detail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#FFE207"
    },
    headerTitle: <DetailHeaderTitle />,
    headerRight: <View style={{ marginRight: 15 }} />
  });

  render() {
    return (
      <View style={styles.mainContainer}>
        <BookDetail navigation={this.props.navigation} />
        <BookText />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
export default Detail;
