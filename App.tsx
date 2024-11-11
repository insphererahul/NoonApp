import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Entypo from "react-native-vector-icons/dist/Entypo";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import GameScreen from "./src/screen/GameScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./src/assets/focused/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./src/assets/normal/home.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="GAME"
            component={GameScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                    <Image
                      source={require("./src/assets/focused/game.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                } else {
                  return (
                    <Image
                      source={require("./src/assets/normal/game.png")}
                      style={{
                        height: size,
                        width: size,
                        resizeMode: "center",
                      }}
                    />
                  );
                }
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused, size }) => {
                if (focused) {
                  return (
                      <Image
                        source={require("./src/assets/focused/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                  );
                } else {
                  return (
                      <Image
                        source={require("./src/assets/normal/shopping_cart.png")}
                        style={{
                          height: size,
                          width: size,
                          resizeMode: "center",
                        }}
                      />
                  );
                }
              },
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
