import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import DetalheProdutos from "./src/pages/DetalheProdutos/index"
import Login from "./src/pages/Login";
import Carrinho from "./src/pages/Carrinho"
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="DetalheProdutos" component={DetalheProdutos} options={{headerShown: false}}/>
        <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


