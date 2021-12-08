import "react-native-gesture-handler";
import React from "react";
import {View } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Produtos({navigation}){
    return(
        <View style={styles.container}>
            <Header home={()=> navigation.goBack("Produtos")}/>
        </View>
    )
}