import React from "react";
import { TouchableHighlight, Image } from "react-native";
import { styles } from "./styles";

export default function Botao(props) {
    const {label} = props;
  return (
    <TouchableHighlight onPress={props.callBack}>
      <Image
        style={styles.img}
        source={{
          uri: `${label}`
        }}
      />
  </TouchableHighlight>

  );
}
