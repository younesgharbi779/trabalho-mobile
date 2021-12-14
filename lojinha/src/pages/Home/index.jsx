import React,{useEffect, useState} from "react";
import { View, ScrollView, StatusBar } from "react-native";
import axios from "axios";

import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Categorias from "../../components/Categorias";
import Card from "../../components/Card";

import { styles } from "./styles";

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
  useEffect(() => { handleClick() }, [])


  return (
    <ScrollView style={styles.containerHome}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#d9d9d9"
      />
      <Header carrinho={()=> navigation.navigate("Carrinho")} />
      <Carrossel />
      <Categorias />
      <View style={styles.container}>
      {produto?.map((produto)=>{
        return( <Card style={styles.container} key={produto.id} uri={produto.imagens} price={produto.vlUnitario} titulo={produto.nome} detalhe={() => {navigation.navigate("DetalheProdutos",{itemId:produto.id})}}/>)
      })}
      </View>
    </ScrollView>
  );
}
