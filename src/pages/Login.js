import React, { Component } from "react";
//import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage
} from "react-native";
import Toaster from "react-native-toaster";
import { StackActions, NavigationActions } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

class Login extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  };

  navigateToHome = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Home" })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  changeEmail = () => {};

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Toaster
          message={this.props.toastMessage}
          onShow={() => this.props.addToast(null)}
        />
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Icon
              style={{ marginRight: 20 }}
              name="book"
              size={40}
              color="#FFE207"
            />
            <Text style={styles.textLogo}>Library</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={password => this.setState({ password })}
            returnKeyType="send"
            onSubmitEditing={() => this.navigateToHome()}
            secureTextEntry={true}
            textContentType="password"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.navigateToHome()}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },

  logoContainer: {
    backgroundColor: "#FFF",
    flexDirection: "row"
  },

  textLogo: {
    fontSize: 24
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    height: 44,
    paddingHorizontal: 15,
    alignSelf: "stretch",
    marginTop: 20
  },

  button: {
    height: 44,
    alignSelf: "stretch",
    marginTop: 30,
    backgroundColor: "#FFE207",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  }
});

// const mapStateToProps = state => ({
//   token: state.login.token,
//   userId: state.login.userId,
//   toastMessage: state.toaster.message
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ login, validateToken, addToast }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);

export default Login;
