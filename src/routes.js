import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import Home from "./pages/Home";
import List from "./pages/List";
import Detail from "./pages/Detail";
import Buy from "./pages/Buy";

const HomeScreen = createStackNavigator(
  {
    Home
  },
  {
    navigationOptions: {
      drawerLabel: " Home "
    }
  }
);

const ListScreen = createStackNavigator(
  {
    List,
    Detail,
    Buy
  },
  {
    navigationOptions: {
      drawerLabel: " List "
    }
  }
);

const MyDrawerNavigator = createDrawerNavigator({
  HomeScreen,
  ListScreen
});

const Routes = createAppContainer(MyDrawerNavigator);

export default Routes;
