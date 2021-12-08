import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao"

export default function Header(props) {
  return (
    <View style={styles.container}>
        <Botao  callBack={props.home} label="https://cdn-icons-png.flaticon.com/512/60/60817.png" />
        <Botao callBack={props.produtos} label="https://cdn-icons-png.flaticon.com/512/61/61125.png"/>
        <Botao  callBack={props.carrinho} label="https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1638853566~hmac=296e580271ff3dd61742b092c5f63e10"/>
    </View>
  );
}
