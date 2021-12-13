import React, {useState} from "react";
import { View, Text, FlatList, TouchableHighlight} from "react-native";
import { styles } from "./styles";


const categorias = [
    {
        key: '1',
        title: 'Populares',
    },
    {
        key: '2',
        title: 'Precinhos',
    },
    {
        key: '3',
        title: 'Favoritos',
    },
    {
        key: '4',
        title: 'Premiados',
    },
    {
        key: '5',
        title: 'Recomendados',
    },
    
];

const categorias2 = [
    {
        key: '1',
        title: 'Tudo',
    },
    {
        key: '7',
        title: 'Ação',
    },
    {
        key: '8',
        title: 'Aventura',
    },
    {
        key: '9',
        title: 'Esportes',
    },
    {
        key: '10',
        title: 'Terror',

    },
    {
        key: '11',
        title: 'Indie',

    },
]
export default function Categorias (){
    const [activeItem, setActiveItem] = useState({
        key: '1',
        title: ''
    },
    );

    
    const renderItemLista=({item}) => {
        const ativo = (item.key == activeItem.key)  ? styles.active : {};
        return (
            <TouchableHighlight onPress={ () => {setActiveItem(item)}} style={styles.text}>
                <Text style={[styles.text, ativo]}>{item.title}</Text>
            </TouchableHighlight>
        );
    }
    const renderItemLista2=({item}) => {
        const ativo = (item.key == activeItem.key)  ? styles.active : {};
        return (
            <TouchableHighlight onPress={ () => {setActiveItem(item)}} style={styles.text}>
                <Text style={[styles.undertext, ativo]}>{item.title}</Text>
            </TouchableHighlight>
        );
    }
    return (
        <View style={styles.container}>
           <FlatList 
                    data={categorias}
                    renderItem={renderItemLista}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.innercontainer}>
            </FlatList>
            <FlatList 
                    data={categorias2}
                    renderItem={renderItemLista2}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.innercontainer}>
            </FlatList>
        </View>
        );
}
