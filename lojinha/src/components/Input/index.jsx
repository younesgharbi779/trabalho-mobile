import React from "react";
import { View, TextInput, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";
export default function Input(props) {
  const { titulo, placeholder, text } = props;
  return (
    <View>
      <Text>{titulo}</Text>
      <TextInput style={styles.input} placeholder={placeholder} onChangeText={text}  />
    </View>
  );
}
