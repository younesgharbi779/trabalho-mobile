import "react-native-gesture-handler";
import React,{useEffect, useState} from "react";
import { View, ScrollView } from "react-native";
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
      url:"https://api-da-lojinha.herokuapp.com/produtos",

    }).then(response =>{
      setProduto(response.data);
    }).catch(error=> console.log(error));
    
  };
    useEffect(()=>{handleClick()},[])

    
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Carrossel />
        {produto?.map((produto)=>{
        return( <Card key={produto.id} uri={produto.imagens} price={produto.vlUnitario} titulo={produto.nome} detalhe={() => {navigation.navigate("Produtos",{itemId:produto.id})}}/>)
        })}
      </View>
    </ScrollView>
  );
}
