import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import BotaoAdicionar from "../BotaoAdicionar";
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export default function CardDetalhe( props ) {

  const { img, descricao, preco, funcao } = props

  return (
    <View style={styles.mainContainer}>

      <View styles={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:img,
          }}
        />

        <View style={styles.priceContainer}>

          <Text style={styles.price}>
            R$ {preco}
          </Text>

        </View>
        
      </View>
      
      <View style={styles.descriptionMainContainer}>

        <View style={styles.descriptionContainer}>
          <Text style={styles.gameDescription}>Descrição do jogo</Text>
          <Text style={styles.description}>{descricao}</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.descriptionContainer}>

          <TouchableOpacity>
            <AntDesign name="hearto" size={30} color="white" />
          </TouchableOpacity>
  
        </View>

      </View>

<<<<<<< HEAD
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <BotaoAdicionar callBack={funcao}  />
=======
      <View style={styles.buttonContainer}>
        <BotaoAdicionar />
>>>>>>> 2b0f9b380cf65667b77faeda1460ff482e2b14d3
      </View>

    </View>
  );
}
