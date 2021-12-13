import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        alignContent:'center'
    },
    img:{
        width: '100%',
        height: 200,
    },
    containerPrice:{
        alignSelf:"flex-start",
        backgroundColor:"#1E2024",
        opacity:5,
        height:200,
        width:"100%",
    },
    containerDescricao:{
        alignItems:"center",
        alignContent:"center",
        height:160,
    },
    descricao:{
        color:"white",
        fontSize:25,
    },
    preco:{
        color:"white",
        fontSize:50,
    }
})