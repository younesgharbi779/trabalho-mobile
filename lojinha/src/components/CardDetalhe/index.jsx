import "react-native-gesture-handler";
import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import BotaoAdicionar from "../BotaoAdicionar";

export default function CardDetalhe(props) {
    const {img, descricao, preco} = props
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri:img,
        }}
      />
      <View style={styles.containerPrice}>
        <View style={styles.containerDescricao}>
          <Text style={styles.descricao}>{descricao}</Text>
          <Text style={styles.preco}>{preco}</Text>
        </View>
        <BotaoAdicionar />
      </View>
    </View>
  );
}
