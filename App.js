//import screens
import WeatherHome from "./screen/WeatherHome";

//import react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: WeatherHome }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "#2B2B52"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
