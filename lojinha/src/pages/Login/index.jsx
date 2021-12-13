import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, Keyboard, ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { createTable, signUp, getAllUsers } from '../../repository/usuarioRepository';
import Usuario from '../../model/Usuario';

export default function Login({navigation}) {

  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const novoUsuario = new Usuario({
    usuario: usuario,
    senha: senha,
  });
  let sign = false;

  useEffect(async () => {
    createTable();
    setListaUsuarios(await getAllUsers());
  }, []);

  const verify = () => {
    for (let i = 0; i < listaUsuarios.length; i++) {
      if (novoUsuario.usuario == listaUsuarios[i].usuario && novoUsuario.senha == listaUsuarios[i].senha) {
        sign = true;
        break;
      };
    };
    if (sign == true){
      navigation.navigate('Home');
    }else{
      console.log('usuario não encontrado')
    }
  }

  const handleSignUp = async (usuario, senha) => {
    if (!usuario === null || !senha === null) return;

    signUp(usuario, senha, setListaUsuarios, listaUsuarios);
    setUsuario(null);
    setSenha(null);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/backgroundImage.jpg')} style={styles.container} >
        <LinearGradient colors={['#191c2f', 'transparent']} style={styles.main} >
          <SafeAreaView>
            <Text style={styles.welcomeText}>
              Welcome!
            </Text>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }} >
              <View style={styles.login}>
                <TextInput
                  style={styles.input}
                  placeholderTextColor='#808e9b'
                  placeholder="Username"
                  value={usuario}
                  onChangeText={setUsuario}
                  autoCorrect={false}
                  autoCapitalize='none'
                />
                <TextInput
                  placeholder='Password'
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={senha}
                  onChangeText={setSenha}
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
              <TouchableHighlight onPress={verify} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>
                  Login
                </Text>
              </TouchableHighlight>
              <View style={styles.signUpTextView}>
                <Text style={styles.signUpText}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                  <Text style={[styles.signUpText, { color: '#e03b22' }]}>
                    {' Sign Up'}
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </LinearGradient >
      </ImageBackground>
    </View>
  );
}