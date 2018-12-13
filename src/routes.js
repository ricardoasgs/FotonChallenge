import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";

const HomeScreen = createStackNavigator(
  {
    Home
  },
  {
    navigationOptions: ({ navigation }) => ({
      defaultNavigationOptions: {
        title: "Welcome"
      },
      initialRouteName: " Home ",
      headerMode: " screen ",
      headerTitle: " Home ",
      drawerLabel: " Home "
    })
  }
);

const ListScreen = createStackNavigator(
  {
    List
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: " List ",
      headerMode: " screen ",
      headerTitle: " List ",
      drawerLabel: " List "
    })
  }
);

const DetailScreen = createStackNavigator(
  {
    Detail
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: " Detail ",
      headerMode: " screen ",
      headerTitle: " Detail ",
      drawerLabel: " Detail "
    })
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  HomeScreen,
  ListScreen,
  DetailScreen
});

const Routes = createAppContainer(MyDrawerNavigator);

export default Routes;
