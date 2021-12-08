import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header produtos={() => navigation.navigate("Produtos")} />
      <Carrossel />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
}
