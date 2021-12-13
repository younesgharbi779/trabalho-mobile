import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:'40%',
        height:200,
        marginTop:50,
        marginBottom: 30,
        backgroundColor: '#191c2f',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    containerImg:{
        width: '100%',
        height: '100%',
    },
    img:{
        width:"100%",
        height:"100%",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    textcontainer:{
        backgroundColor: '#232743',
        width: '100%',
        height: '23%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    text:{
        width: '38%',
        flexWrap:'wrap',
        fontSize:13,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 8,
        marginRight: 8,
        flexWrap: 'wrap',
        textAlign:'center',
        
    },
})