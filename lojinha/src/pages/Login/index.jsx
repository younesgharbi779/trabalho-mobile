import "react-native-gesture-handler";
import React, { useState } from "react";
import { View, Text, Keyboard, ImageBackground } from "react-native";
import { styles } from "./styles";
import axios from "axios";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

export default function Login({ navigation }) {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")
  const [clientes, setClientes] = useState([])

  const handleClick = async () => {

    await axios({
      method: "GET",
      url: "https://api-da-lojinha.herokuapp.com/clientes",

    }).then(response => {
      setClientes(response.data);
      clientes.filter((clientes.usuario && clientes.senha))
    })
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/backgroundImage.jpg')} style={styles.container} >
        <LinearGradient colors={['#191c2f', 'transparent']} style={styles.main} >
          <Text style={styles.welcomeText}>
            Welcome!
          </Text>
          <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }} >
            <View style={styles.login}>
              <TextInput
                placeholder='Email Address'
                placeholderTextColor='#808e9b'
                style={styles.input}
                autoCorrect={false}
                autoCapitalize='none'
                autoCompleteType='email'
                keyboardType='email-address'
                textContentType='emailAddress' />
              <TextInput
                placeholder='Password'
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor='#808e9b'
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.fpText}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableHighlight onPress={() => navigation.navigate("Home")} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>
                Login
              </Text>
            </TouchableHighlight>
            <View style={styles.signUpTextView}>
              <Text style={styles.signUpText}>
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text style={[styles.signUpText, { color: '#e03b22' }]}>
                  {' Sign Up'}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient >
      </ImageBackground>
    </View>
  );
}