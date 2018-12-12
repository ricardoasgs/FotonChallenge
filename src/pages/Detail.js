import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Detail extends Component {
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

        <Text style={{ fontSize: 20 }}>Detail</Text>

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

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.bookContainer}>
            <View style={styles.book} />
            <View style={styles.description}>
              <Text>asbjkfdbajksbfajshf</Text>
            </View>
          </View>
          <View style={styles.footerBookContainer}>
            <View style={styles.pages}>
              <Text>Pages</Text>
            </View>
            <View style={styles.options}>
              <Text>Options</Text>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Um paragrafo aqui falando sobre qualquer coisa inutil dessa vida
            desgraçada nesse calor do inferno. Um paragrafo aqui falando sobre
            qualquer coisa inutil dessa vida desgraçada nesse calor do inferno,
            um paragrafo aqui falando sobre qualquer coisa inutil dessa vida
            desgraçada nesse calor do inferno. Um paragrafo aqui falando sobre
            qualquer coisa inutil dessa vida desgraçada nesse calor do inferno.
          </Text>
          <Text style={styles.text}>
            Um paragrafo aqui falando sobre qualquer coisa inutil, Um paragrafo
            aqui falando sobre qualquer coisa inutil dessa vida desgraçada nesse
            calor do inferno, Um paragrafo aqui falando sobre qualquer coisa
            inutil dessa vida desgraçada nesse calor do inferno
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  infoContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#FFE207"
  },
  bookContainer: {
    flex: 3,
    flexDirection: "row"
  },
  book: {
    flex: 1,
    marginLeft: 10,
    marginTop: 15,
    backgroundColor: "black"
  },
  description: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
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
  options: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 5,
    backgroundColor: "#FFF"
  },
  text: {
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 20
  }
});
export default Detail;
