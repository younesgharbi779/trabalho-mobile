import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";
import CardCarrinho from "../../components/CardCarrinho";



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
      </View>
    </View>
  )
}