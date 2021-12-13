import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import Produtos from "./src/pages/Produtos"
import Login from "./src/pages/Login";


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Produtos" component={Produtos} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


