import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao"

export default function Header(props) {
  return (
    <View style={styles.container}>
        <Botao  callBack={props.home} label="https://cdn-icons-png.flaticon.com/512/60/60817.png" />
        <Botao callBack={props.produtos} label="https://cdn-icons-png.flaticon.com/512/61/61125.png"/>
        <Botao  callBack={props.carrinho} label="https://cdn-icons-png.flaticon.com/512/711/711192.png"/>
    </View>
  );
}
