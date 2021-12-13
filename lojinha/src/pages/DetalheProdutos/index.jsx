import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios"

import Header from "../../components/Header";
import CardDetalhe from "../../components/CardDetalhe";
import { styles } from "./styles";

export default function DetalheProdutos({navigation, route}){
    const [produto,setProduto] = useState(JSON);
    const { itemId } = route.params;

    const handleClick = async () => {
  
      await axios({
        method: "GET",
        url: `https://api-da-lojinha.herokuapp.com/produtos/${JSON.stringify(
        itemId
      )}`,
  
      }).then(response => {
        setProduto(response.data)
      })
    };

    useEffect(()=>{handleClick()},[])

    const jogo = produto

    const adicionar = () => {
      axios
        .post("https://api-da-lojinha.herokuapp.com/itemPedido", {
          
          quantidade: "1",
          pedido: {
            id: 3,
          },
          produto: {
            id: jogo.id,
          },
        
        })
        .then(function (response) {
          console.log(response, "adicionado");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    return (
      <View style={styles.container}>
        <Header home={() => navigation.goBack("Home")} />
        <CardDetalhe
          img={jogo.imagens}
          descricao={jogo.descricao}
          preco={jogo.vlUnitario}
          funcao={adicionar}
        />
      </View>
    );
  }