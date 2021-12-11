import React from "react";
import { View, Image, Text } from "react-native";

import BotaoAdicionar from "../BotaoAdicionar";
import { AntDesign } from '@expo/vector-icons';

export default function CardDetalhe( props ) {

  const { img, descricao, preco } = props

  return (
    <View style={{flex: 1}}>

      <View style={{flex: 4}}>
        <Image
          style={{height: '100%', width: '100%'}}
          
          source={{
            uri:img,
          }}
        />

        <View style={{alignItems: 'flex-end'}}>

          <Text style={{ color: '#fff', fontSize: 48, position: 'relative',
           bottom: 70, backgroundColor: '#e03b22', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, paddingHorizontal: 5}}>
            R$ {preco}
          </Text>

        </View>
        
      </View>
      
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#202430', alignItems: 'center', borderRadius: 5,
        marginHorizontal: 20, marginTop: 20}}>

        <View style={{width: '50%', alignItems: 'center', justifyContent: 'center', height: 150}}>
          <Text style={{color: '#e03b22', fontSize: 20, marginBottom: 10, fontWeight: 'bold'}}>Descrição do jogo</Text>
          <Text style={{color:'#fff', textAlign: 'center', paddingHorizontal: 5 }}>{descricao}</Text>
        </View>

        <View style={{width: 3, height: 120, backgroundColor: '#191c2f', borderRadius: 5}}></View>

        <View style={{width: '50%', alignItems: 'center', justifyContent: 'center', height: 150}}>
          <AntDesign name="hearto" size={30} color="white" />
        </View>

      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <BotaoAdicionar />
      </View>

    </View>
  );
}
