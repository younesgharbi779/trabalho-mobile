import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao"

export default function Card(props) {
    const {price, uri} = props
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={{
            uri: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
          }}
        />
      </View>
      <Text>R$ {price}</Text>
      <Botao label="https://cdn-icons-png.flaticon.com/512/2099/2099153.png" />
    </View>
  );
}
