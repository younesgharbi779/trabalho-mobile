import "react-native-gesture-handler";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Keyboard,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import {
  verificador,
  createTable,
  verifyUser,
  getAllUsers,
  createUser
} from "../../repository/usuarioRepository";
import Usuario from "../../model/Usuario";
import Input from "../../components/Input";

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState();
  const [senha, setSenha] = useState();
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(async () => {
    createTable();
    setListaUsuarios(await getAllUsers());
    console.log(listaUsuarios)
  }, []);

  const handlePress = async () => {
    // createUser(usuario, senha)
    // // setListUsuarios(await getAllUsers());
    // verificador(usuario, senha)
    // console.log(listaUsuarios)
    // verifyUser(usuario, senha, setListaUsuarios, listaUsuarios)
    verificador(usuario, senha)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/backgroundImage.jpg")}
        style={styles.container}
      >
        <View style={styles.main}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <View style={styles.mid}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#808e9b"
              placeholder="Username"
              value={usuario}
              onChangeText={setUsuario}
              autoCorrect={false}
              autoCapitalize="none"
            />
            <TextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              value={senha}
              onChangeText={setSenha}
              placeholderTextColor="#808e9b"
              style={styles.input}
              secureTextEntry={true}
              textContentType="password"
            />
            <Text style={styles.fpText}>Forgot Password?</Text>

            <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate("Home")}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}> Don't Have an account? </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("Cadastrar")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
=======
import React, { useState } from "react";
import {View, Text } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import Input from "../../components/Input";
import Botao from "../../components/Botao"
import axios from "axios"


export default function Login({navigation}){
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const [clientes, setClientes] = useState([])

    const handleClick = async () => {

        await axios({
          method: "GET",
          url:"http://localhost:8080/clientes",
    
        }).then(response =>{
          setClientes(response.data);
            clientes.filter((cliente.usuario && cliente.senha))
        })
          
        console.log("terminei a funcao")
      };

    return(
        <View style={styles.container}>
            <Input titulo="usuário" text={setLogin}/>
            <Input titulo = "senha" text={setSenha}/>
            <Botao callBack={()=> navigation.navigate("Home")} label="https://cdn-icons-png.flaticon.com/512/1286/1286825.png"/>
        </View>
    )
}
>>>>>>> 36d2feaaf508a863b398c6416c7e06d718659b72
