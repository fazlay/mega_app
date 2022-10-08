import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HeadPhone from "../screens/headPhones";
import Home from "../screens/home";
import ProductDetails from "../screens/product-details";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}
const HeadPhoneStack = createNativeStackNavigator();
function HeadPhoneStackScreen() {
  return (
    <HeadPhoneStack.Navigator>
      <HeadPhoneStack.Screen name="HeadPhone" component={HeadPhone} />
      <HeadPhoneStack.Screen name="Details" component={ProductDetails} />
    </HeadPhoneStack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer theme={THEME}>
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} />
        <Tab.Screen name="HeadPhonesTab" component={HeadPhoneStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
