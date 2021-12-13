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

<<<<<<< HEAD
    
=======
>>>>>>> afc4997a77010c73724111081d644464cd512bdf
  return (
    <ScrollView style={styles.containerHome}>
      <Header carrinho={()=>navigation.navigate("Carrinho")} />
      <Categorias />
<<<<<<< HEAD
      <Header />
      <Carrossel />
      <Categorias />
=======
      <Carrossel />
>>>>>>> afc4997a77010c73724111081d644464cd512bdf
      <View style={styles.container}>
      {produto.map((produto, i)=>{
        return( <Card style={styles.container} key={produto.id} uri={produto.imagens} price={produto.vlUnitario} titulo={produto.nome} detalhe={() => {navigation.navigate("DetalheProdutos",{itemId:produto.id})}}/>)
      })}
      </View>
    </ScrollView>
  );
}
