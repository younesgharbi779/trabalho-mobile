import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'30%',
        marginTop:50,
        marginBottom: 35,
        display:'flex',
        flexDirection:"column",
        justifyContent: "space-evenly",
    },
    innercontainer:{
        marginLeft: 30,
        marginBottom: 25,
        display:'flex',
        flexDirection:'row',
    },
    text:{
        marginRight: 13,
        color: '#3e4475', 
        fontSize: 20,
        fontWeight:'bold',
        textShadowColor: "#000",
        textShadowOffset: {
        width: 0,
        height: 12,
        },
        textShadowOpacity: 0.58,
        textShadowRadius: 16.00,
        elevation: 24,
    },
    undertext:{
        marginTop: 2,
        marginRight: 8,
        color: '#3e4475',
        fontSize: 15,
        fontWeight:'bold',
        textShadowColor: "#000",
        textShadowOffset: {
        width: 0,
        height: 12,
        },
        textShadowOpacity: 0.58,
        textShadowRadius: 16.00,
        elevation: 24,
    },
    active:{
        color: '#9966ff',
        textShadowColor: "#cc99ff",
        textShadowOffset: {
        width: 0,
        height: 12,
        },
        textShadowOpacity: 0.58,
        textShadowRadius: 16.00,
        elevation: 24,
    },
})