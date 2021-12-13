import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import axios from "axios";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Carrinho() {
  
  const [pedido, setPedido] = useState(JSON)

  const handleClick = async () => {

    await axios ({
      method: "GET",
      url:"https://api-da-lojinha.herokuapp.com/itemPedido",

    }).then(response => {
      setPedido(response.data)
    })
  };

  useEffect(()=>{handleClick()},[])

  const total = total + pedido.subTotal
  
  return (
    // <View>
    //     <Text>{pedido.subTotal}</Text>
    // </View>
    <>
      <View style={{flex: 1, backgroundColor: '#191c2f'}}>

        <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#fff', marginVertical: 20}}>
          Carrinho
        </Text>

        <View style={{flexDirection: 'row', height: 200, backgroundColor: '#202430', marginHorizontal: 10,
          borderRadius: 5}}>
            
          <View style={{width: '50%'}}>

            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginVertical: 20}}>
              Nome do produto
            </Text>
            <Text style={{color: '#e03b22', fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}>R$100,00</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 25,
              paddingHorizontal: 30 }}>

              <View style={{flexDirection: 'row'}}>

                <AntDesign name="minussquare" size={24} color="#fff" />
                <Text style={{marginHorizontal: 8, color: '#fff', fontWeight: 'bold', marginTop: 3}}>1</Text>
                <AntDesign name="plussquare" size={24} color="#fff" />

              </View>
              
              <FontAwesome name="remove" size={30} color="#e03b22" />

            </View>
              
          </View>

          <View style={{width: '50%'}}>
            <Image 
              source={{uri: 'https://preview.redd.it/0na3mtd688l41.jpg?auto=webp&s=75b28f8447424e23e03e5fe4b93dde8eb1c903bd'}}
              style={{width: 200, height: 200, borderRadius: 2}}
            />
          </View>

        </View>

      </View>

      <View style={{backgroundColor: '#202430', height: 150, padding: 20}}>

        <Text style={{color: '#fff', fontSize: 24, textTransform: 'uppercase'}}>Total</Text>
        <Text style={{color: '#fff', fontSize: 24}}>R$100,00</Text>

        <TouchableOpacity style={{width: 110, height: 35, backgroundColor: '#e03b22',
          justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginRight: 20, borderRadius: 2}}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Comprar</Text>
        </TouchableOpacity>
    
      </View>

    </>
    
  )
}