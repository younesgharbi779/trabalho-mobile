import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import {View, Text } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
<<<<<<< HEAD
import CardDetalhe from "../../components/CardDetalhe";
=======
import Card from "../../components/CardDetalhe";
>>>>>>> f6ea422227a85098e05347383772e10e95ec9695
import axios from "axios"

export default function Produtos({navigation, route}){
    const [produto,setProduto] = useState(JSON);
    const { itemId} = route.params;

    const handleClick = async () => {
  
      await axios({
        method: "GET",
        url:`https://api-da-lojinha.herokuapp.com/produtos/${JSON.stringify(itemId)}`,
  
      }).then(response =>{
        setProduto(response.data),
        console.log(response.data);
      })
        
      console.log("terminei a funcao")
    };
      useEffect(()=>{handleClick()},[])
      const jogo = produto
    return(
        <View style={styles.container}>
            <Header home={()=> navigation.goBack("Home")}/>
            <CardDetalhe img={jogo.imagens} descricao={jogo.descricao} preco={jogo.vlUnitario} /> 
        </View>
    )
}