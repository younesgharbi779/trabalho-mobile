import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function BotaoAdicionar(props) {
  const { label } = props;
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={props.callBack}>
        <View>
          <Image
            style={styles.img}
            source={{
                uri: "https://cdn-icons-png.flaticon.com/512/4379/4379578.png",
            }}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}
