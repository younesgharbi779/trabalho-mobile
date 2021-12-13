import React from "react";
import { TouchableHighlight,Text, View } from "react-native";
import { styles } from "./styles";

export default function BotaoInterativo(props) {
  const { label, callBack } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={callBack}>
          <Text style={styles.text2}>R${props.label}</Text>
      </TouchableHighlight>
    </View>
  );
}
