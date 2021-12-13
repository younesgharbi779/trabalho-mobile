import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Categorias from "../../components/Categorias";
import Card from "../../components/Card";
import axios from "axios";

export default function Home({ navigation }) {
  const [produto,setProduto] = useState([]);

  const handleClick = async () => {

    await axios({
      method: "GET",
      url:"https://api-da-lojinha.herokuapp.com/produtos",

    }).then(response =>{
      setProduto(response.data)
    })
  };
    useEffect(()=>{handleClick()},[])

    
  return (
    <ScrollView style={styles.containerHome}>
<<<<<<< HEAD
      <Header carrinho={()=>navigation.navigate("Carrinho")} />
      <Categorias />
=======
      <Header />
>>>>>>> e9279569f5f4b989eca83dc5dc4ed3586ea67f6c
      <Carrossel />
      <Categorias />
      <View style={styles.container}>
      {produto.map((produto, i)=>{
        return( <Card style={styles.container} key={produto.id} uri={produto.imagens} price={produto.vlUnitario} titulo={produto.nome} detalhe={() => {navigation.navigate("DetalheProdutos",{itemId:produto.id})}}/>)
      })}
      </View>
    </ScrollView>
  );
}
