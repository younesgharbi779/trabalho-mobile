import React, { useState } from "react";
import { View, TextInput, Text, SafeAreaView, Image } from "react-native";
import { styles } from "./styles";
import Botao from "../Botao";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: '0',
        title: 'Valorant',
        image: require('../../assets/valorant.webp'),
        price: 'GRÁTIS',
        tag1: 'Ação',
        tag2: 'FPS',

    },
    {
        key: '1',
        title: 'Metro Redux',
        image: require('../../assets/metro.jpg'),
        price: 'R$89,90',
        tag1: 'Terror',
        tag2: 'FPS',
    },
    {
        key: '2',
        title: 'Dead Space',
        image: require('../../assets/deadspace.png'),
        price: 'R$69,90',
        tag1: 'Ação',
        tag2: 'Terror',
    },
    {
        key: '3',
        title: 'Bioshock',
        image: require('../../assets/bioshock.jpg'),
        price: 'R$119,90',
        tag1: 'Fantasia',
        tag2: 'Mistério',
    },
    {
        key: '4',
        title: 'The Last of Us',
        image: require('../../assets/last.png'),
        price: 'R$99,90',
        tag1: 'Mistério',
        tag2: 'FPS',
    },
    {
        key: '5',
        title: 'The Walking Dead',
        image: require('../../assets/walkingdead.webp'),
        price: 'R$49,90',
        tag1: 'Terror',
        tag2: 'HQ',

    },
];
export default function Carrossel(props){
    const [showHome, setShowHome] = useState(false);

    function renderSlides({ item }){
        return(
            <View style={styles.slidercontainer}>
                <View style={styles.container}>
                    <Image 
                    source={item.image} 
                    style={styles.img}
                     />
                </View>
                <View  style={styles.detalhes}>
                    <Text style={styles.text}>{item.title}</Text>
                        <View style={styles.cart}>
                            <Text style={styles.preco}>{item.price}</Text>
                            <Botao callBack={props.carrinho} label="https://cdn-icons-png.flaticon.com/512/711/711192.png"/>
                        </View>
                    <View style={styles.tagcontainer}>
                        <Text style={styles.tags}>{item.tag1}</Text>
                        <Text style={styles.tags}>{item.tag2}</Text>
                    </View>
                </View>
            </View>
        )
    }

    if (showHome){
    }else{
        return (
            <AppIntroSlider
            renderItem={renderSlides}
            data={slides}
            renderNextButton={() => {}}
            renderDoneButton={() => {}}
            />
        );
    }
} 