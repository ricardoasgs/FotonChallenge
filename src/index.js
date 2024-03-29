import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./routes";

import store from "./config/store";
import "./config/statusBarConfig";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
