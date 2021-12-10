import "react-native-gesture-handler";
import React,{useEffect, useState} from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import axios from "axios";

export default function Home({ navigation }) {
  const [produto,setProduto] = useState([]);

  const handleClick = async () => {

    await axios({
      method: "GET",
      url:"http://localhost:8080/produtos",

    }).then(response =>{
      setProduto(response.data),
      console.log(response.data);
    })
      
    console.log("terminei a funcao")
  };
    useEffect(()=>{handleClick()},[])
  return (
    <View style={styles.container}>
      <Header />
      <Carrossel />
      {produto?.map((produto)=>{
       return( <Card key={produto.id} uri={produto.imagens} price={produto.vlUnitario} detalhe={() => {navigation.navigate("Produtos",{itemId:produto.id})}}/>)
      })}
    </View>
  );
}
