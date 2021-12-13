import React from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Ionicons } from '@expo/vector-icons';

export default function BotaoAdicionar(props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.callBack}>
        <Ionicons name="cart-outline" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}
