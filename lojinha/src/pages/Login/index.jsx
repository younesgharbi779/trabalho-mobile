import "react-native-gesture-handler";
import React from "react";
import {View } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import Input from "../../components/Input";
import Botao from "../../components/Botao"


export default function Login({navigation}){
    return(
        <View style={styles.container}>
            <Input titulo="usuário" />
            <Input titulo = "senha"/>
            <Botao callBack={()=> navigation.navigate("Home")} label="https://cdn-icons-png.flaticon.com/512/1286/1286825.png"/>
        </View>
    )
}