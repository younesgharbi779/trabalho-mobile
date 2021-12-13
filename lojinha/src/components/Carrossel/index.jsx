import React, { useState } from "react";
import { View, TextInput, Text, SafeAreaView, Image } from "react-native";
import { styles } from "./styles";
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
    {
        key: '1',
        title: 'Hotline Miami',
        text: 'jogo de ação',
        image: require('../../assets/1.png')

    },
    {
        key: '1',
        title: 'Steins Gate',
        text: 'jogo de ação',
        image: require('../../assets/2.jpg')

    },
    {
        key: '1',
        title: 'Dont Starve Together',
        text: 'jogo de ação',
        image: require('../../assets/3.jpg')

    },
    {
        key: '1',
        title: 'Audiosurf 2',
        text: 'jogo de ação',
        image: require('../../assets/4.jpg')

    },
];
export default function Carrossel(){
    const [showHome, setShowHome] = useState(false);

    function renderSlides({ item }){
        return(
            <View style={styles.slidercontainer}>
                <View style={styles.container}>
                    <Image 
                    source={item.image} 
                    style={styles.img}
                     />
                    <Text style={styles.text}>
                        {item.title}
                    </Text>
                </View>
            </View>
        )
    }

    if (showHome){
        return <Text>Entrou</Text>
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