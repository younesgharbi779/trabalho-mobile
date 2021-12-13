import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao";
import BotaoInterativo from "../BotaoInterativo";

export default function Card(props) {
  const { price, uri, detalhe, titulo } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: uri,
          }}
          />
      </View>

        <View style={styles.card}>
        <View style={styles.textcontainer}>
            <Text style={styles.text}>{titulo}</Text>
            <BotaoInterativo label = {price} callBack={detalhe}/>
        </View>
          <View style={styles.cartcontainer}>
           <Botao callBack={props.carrinho} label="https://cdn-icons-png.flaticon.com/512/711/711192.png"/>
          </View>
      </View>
    </View>
  );
}
