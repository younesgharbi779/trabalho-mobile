import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import axios from "axios";
import CardCarrinho from "../../components/CardCarrinho";

import { styles } from './styles'

export default function Carrinho() {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => { handleClick() }, [])

  const total = 0

  return (

    <View style={styles.mainContainer}>

      <ScrollView>
        {pedidos.map((pedido, i) => {
          return (<CardCarrinho key={i} foto={pedido.produto.imagens} preco={pedido.produto.vlUnitario} nome={pedido.produto.nome} total={total + pedido.produto.vlUnitario} />)
        })}
      </ScrollView>
      <View style={styles.container}>

        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>R$ {total}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
};