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
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{titulo}</Text>
           <BotaoInterativo label = {price} callBack={detalhe}/> 
      </View>
    </View>
  );
}
