import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  slidercontainer:{
    marginTop: 50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height: 160,
      width: '80%',
      backgroundColor:'#232743',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
  },
  img:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  text:{
    color: '#ff4dd2',
    fontSize: 16,
    fontWeight:'bold',
    textAlign:'center',
    width: '100%',
    marginBottom: 45,
    padding: 10,

  }
})