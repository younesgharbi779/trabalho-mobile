import React from "react";
import { TouchableHighlight, Image, View } from "react-native";
import { styles } from "./styles";

export default function Botao(props) {
  const { label, callBack } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={callBack}>
        <Image
          style={styles.img}
          source={{
            uri: `${label}`,
          }}
        />
      </TouchableHighlight>
    </View>
  );
}
