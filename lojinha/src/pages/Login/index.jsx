import "react-native-gesture-handler";
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
