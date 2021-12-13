import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    container:{
        width:'100%',
        height:120,
        marginTop:5,
        marginTop:15,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        flexDirection:'row',
        backgroundColor: '#d9d9d9',
        borderRadius: 70,
    },
    containerImg:{
        width: '36%',
        height: '100%',
    },
    img:{
        width:"100%",
        height:"100%",
        borderRadius: 80,
    },
    card:{
        width: '60%',
        flexDirection: 'row',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    textcontainer:{
        width: '50%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    text:{
        flexWrap:'wrap',
        fontSize:22,
        color: '#191c2f',
        fontWeight: 'bold',
        flexWrap: 'wrap',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    cartcontainer:{
        width: '10%',
        marginLeft: 20,
        justifyContent:'center',
        alignItems:'center',
    }
})