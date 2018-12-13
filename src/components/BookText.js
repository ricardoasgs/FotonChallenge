import React, { Component } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";

class BookText extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.text}>
            Um paragrafo aqui falando sobre qualquer coisa inutil dessa vida
            desgraçada nesse calor do inferno. Um paragrafo aqui falando sobre
            qualquer coisa inutil dessa vida desgraçada nesse calor do inferno,
            um paragrafo aqui falando sobre qualquer coisa inutil dessa vida
            desgraçada nesse calor do inferno.
          </Text>
          <Text style={styles.text}>
            Um paragrafo aqui falando sobre qualquer coisa inutil, Um paragrafo
            aqui falando sobre qualquer coisa inutil dessa vida desgraçada nesse
            calor do inferno, Um paragrafo aqui falando sobre qualquer coisa
            inutil dessa vida desgraçada nesse calor do inferno
          </Text>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1
  },
  textContainer: {
    flex: 5,
    backgroundColor: "#FFF"
  },
  text: {
    marginTop: 25,
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 15,
    lineHeight: 32,
    color: "#757B81"
  }
});
export default BookText;
