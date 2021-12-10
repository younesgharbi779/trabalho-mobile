import "react-native-gesture-handler";
import React, { useState } from "react";
import {View, Text } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import Input from "../../components/Input";
import Botao from "../../components/Botao"
import axios from "axios"


export default function Login({navigation}){
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [clientes, setClientes] = useState([])

    const handleClick = async () => {

        await axios({
          method: "GET",
          url:"http://localhost:8080/clientes",
    
        }).then(response =>{
          setClientes(response.data);
            clientes.filter((cliente.usuario && cliente.senha))
        })
          
        console.log("terminei a funcao")
      };

    return(
        <View style={styles.container}>
            <Input titulo="usuário" text={setLogin}/>
            <Input titulo = "senha" text={setSenha}/>
            <Botao callBack={()=> navigation.navigate("Home")} label="https://cdn-icons-png.flaticon.com/512/1286/1286825.png"/>
        </View>
    )
}