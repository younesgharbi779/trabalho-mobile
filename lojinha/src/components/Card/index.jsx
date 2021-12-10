import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao";

export default function Card(props) {
  const { price, uri, detalhe, titulo } = props;
  return (
    <View style={styles.container}>
      <Text>{titulo}</Text>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: uri,
          }}
        />
      </View>
      <Text>R$ {price}</Text>
      <View style={styles.containerBtn}>
        <Botao
          label="https://cdn-icons-png.flaticon.com/512/2099/2099153.png"
          callBack={detalhe}
        />
      </View>
    </View>
  );
}
