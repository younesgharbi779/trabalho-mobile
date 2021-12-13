import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import CardCarrinho from "../../components/CardCarrinho";

import { styles } from './styles'

export default function Carrinho() {
  
  const [pedidos, setPedidos] = useState([])

  const handleClick = async () => {

    await axios ({
      method: "GET",
      url:"https://api-da-lojinha.herokuapp.com/itemPedido",

    }).then(response => {
      setPedidos(response.data)
    })
  };

  useEffect(()=>{handleClick()},[])

  const total = 0
  
  return (

    <View style={styles.mainContainer}>

      <ScrollView>
        {pedidos.map((pedido, i)=>{
          return( <CardCarrinho  key={i} foto={pedido.produto.imagens} preco={pedido.produto.vlUnitario} nome={pedido.produto.nome} total={total + pedido.produto.vlUnitario}/>)
        })}
      </ScrollView>
<<<<<<< HEAD
      
=======

>>>>>>> 9bd73689ef13528f320c699e8cdb123dcf926bf8
      <View style={styles.container}>

        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>R$ {total}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}