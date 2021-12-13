import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react"

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from './styles'
export default function CardCarrinho(props) {
    const { nome, preco, foto, total } = props
    const [contador, setContador] = useState(1)
    return (
        <>
            <View style={styles.mainContainer}>

                <View style={styles.infoContainer}>

                    <Text style={styles.gameName}>{nome}</Text>

                    <Text style={styles.price}>{preco}</Text>

                    <View style={styles.iconsContainer}>

                        <TouchableOpacity disabled={contador==0 ? true : false} onPress={()=>setContador(contador -1)}>
                            <AntDesign name="minussquareo" size={24} color="#fff" />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantity}>{contador}</Text>

                        <TouchableOpacity  onPress={()=>setContador(contador + 1)}>
                            <AntDesign name="plussquareo" size={24} color="#fff" />
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={styles.removeButton}>
                        <FontAwesome name="remove" size={26} color="#e03b22" />
                    </TouchableOpacity>

                </View>

                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: foto,
                        }}
                        style={styles.image}
                    />
                </View>

            </View>
        </>
    );
} 