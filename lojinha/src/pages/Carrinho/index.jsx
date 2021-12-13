import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import axios from "axios";


export default function Carrinho(){
    const[pedido, setPedido] = useState(JSON)

    const handleClick = async () => {

        await axios({
          method: "GET",
          url:"https://api-da-lojinha.herokuapp.com/itemPedido",
    
        }).then(response =>{
          setPedido(response.data)
        })
      };
      useEffect(()=>{handleClick()},[])
      const total = total + pedido.subTotal
  

    return(
        <View>
            <Text>{pedido.subTotal}</Text>
        </View>
    )
}