import React from "react";
import { Text, View, Button, StatusBar } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao"

export default function Header(props) {
  return (
    <View style={styles.container}>
        <StatusBar />
        <Botao  callBack={props.home} label="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" />
        <Botao callBack={props.produtos} label="https://cdn-icons-png.flaticon.com/512/687/687259.png"/>
        <Botao  callBack={props.carrinho} label="https://cdn-icons-png.flaticon.com/512/743/743131.png"/>
        <Botao  callBack={props.logout} label="https://cdn-icons-png.flaticon.com/512/126/126467.png"/>
    </View>
  );
}
