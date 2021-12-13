import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/pages/Home";
import DetalheProdutos from "./src/pages/DetalheProdutos/index"
import Login from "./src/pages/Login";
import Carrinho from "./src/pages/Carrinho"
import Cadastrar from "./src/pages/Cadastrar"


import Carrinho from './src/pages/Carrinho/index'
import { StatusBar } from "react-native";

export default function App() {
  const Stack = createStackNavigator();
  return (
<<<<<<< HEAD
    <NavigationContainer >
      <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="DetalheProdutos" component={DetalheProdutos} options={{headerShown: false}}/>
        <Stack.Screen name="Carrinho" component={Carrinho} options={{headerShown: false}} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    // <NavigationContainer initialRouteName="Home">
    //   <Stack.Navigator initialRouteName="Login">
    //   <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
    //     <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    //     <Stack.Screen name="DetalheProdutos" component={DetalheProdutos} options={{headerShown: false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
      <StatusBar />
      <Carrinho />
    </>
    
>>>>>>> 2b0f9b380cf65667b77faeda1460ff482e2b14d3
  );
}


