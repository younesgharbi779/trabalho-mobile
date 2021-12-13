import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";

import Header from "../../components/Header";
import CardDetalhe from "../../components/CardDetalhe";
import { styles } from "./styles";

export default function DetalheProdutos({ navigation, route }) {
  const [produto, setProduto] = useState(JSON);
  const { itemId } = route.params;

  const handleClick = async () => {
    await axios({
      method: "GET",
<<<<<<< HEAD
      url: `https://api-da-lojinha.herokuapp.com/produtos/${JSON.stringify(
        itemId
      )}`,
=======
      url: `https://api-da-lojinha.herokuapp.com/produtos/${JSON.stringify(itemId)}`,
>>>>>>> 4eec24ee19428deacb5dd49663a584ab5b105aec
    }).then((response) => {
      setProduto(response.data);
    });
  };
<<<<<<< HEAD

  useEffect(() => {
    handleClick();
  }, []);
  const jogo = produto;

  const adicionar = () => {
    axios
      .post("https://api-da-lojinha.herokuapp.com/itemPedido", {
        
=======

  useEffect(() => {
    handleClick();
  }, []);
  const jogo = produto;

  const adicionar = () => {
    axios
      .post("https://api-da-lojinha.herokuapp.com/itemPedido", {

>>>>>>> 4eec24ee19428deacb5dd49663a584ab5b105aec
        quantidade: "1",
        pedido: {
          id: 3,
        },
        produto: {
          id: jogo.id,
        },
<<<<<<< HEAD
      
      })
      .then(function (response) {
        console.log(response);
=======

      })
      .then(function (response) {
        console.log(response, "adicionado");
>>>>>>> 4eec24ee19428deacb5dd49663a584ab5b105aec
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Header home={() => navigation.goBack("Home")} carrinho={()=> navigation.navigate("Carrinho")} />
      <CardDetalhe
        img={jogo.imagens}
        descricao={jogo.descricao}
        preco={jogo.vlUnitario}
        funcao={adicionar}
      />
    </View>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 4eec24ee19428deacb5dd49663a584ab5b105aec
