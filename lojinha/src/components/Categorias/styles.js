import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'10%',
        marginTop:8,
        marginBottom: 5,
        display:'flex',
        flexDirection:"column",
        justifyContent: "space-evenly",
    },
    innercontainer:{
        marginLeft: 10,
        marginBottom: 3,
        display:'flex',
        flexDirection:'row',
    },
    text:{
        marginLeft: 10,
        color: 'lightgray', 
        fontSize: 20,
        fontWeight:'bold',
    },
    undertext:{
        marginRight: 8,
        color: 'lightgray',
        fontSize: 15,
        fontWeight:'bold',
    },
    active:{
        color: '#e03b22',
    },
})