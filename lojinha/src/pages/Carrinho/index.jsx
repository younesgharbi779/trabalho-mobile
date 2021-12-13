import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { View, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import CardCarrinho from "../../components/CardCarrinho";


=======
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios";
import CardCarrinho from "../../components/CardCarrinho";

import { styles } from './styles'
>>>>>>> afc4997a77010c73724111081d644464cd512bdf

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
<<<<<<< HEAD
    <View>
      {pedidos.map((pedido, i)=>{
        return( <CardCarrinho  key={i} foto={pedido.produto.imagens} preco={pedido.produto.vlUnitario} nome={pedido.produto.nome} total={total + pedido.produto.vlUnitario}/>)
      })}
            <View style={{ backgroundColor: "#202430", height: 150, padding: 20 }}>
        <Text
          style={{ color: "#fff", fontSize: 24, textTransform: "uppercase" }}
        >
          Total
        </Text>
        <Text style={{ color: "#fff", fontSize: 24 }}>{total}</Text>

        <TouchableOpacity
          style={{
            width: 110,
            height: 35,
            backgroundColor: "#e03b22",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "flex-end",
            marginRight: 20,
            borderRadius: 2,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Comprar</Text>
        </TouchableOpacity>
=======

    <View style={styles.mainContainer}>

      <ScrollView>
        {pedidos.map((pedido, i)=>{
          return( <CardCarrinho  key={i} foto={pedido.produto.imagens} preco={pedido.produto.vlUnitario} nome={pedido.produto.nome} total={total + pedido.produto.vlUnitario}/>)
        })}
      </ScrollView>

      <View style={styles.container}>

        <Text style={styles.total}>Total</Text>
        <Text style={styles.price}>R$ {total}</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        
>>>>>>> afc4997a77010c73724111081d644464cd512bdf
      </View>
    </View>
  )
}