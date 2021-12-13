import Usuario from '../model/Usuario';
import {Alert} from 'react-native';

export const createTable = async () => {
    await Usuario.createTable();

};


export const createUser = async (usuario, senha) =>{
    const novoUser = new Usuario({
        usuario: usuario,
        senha: senha
    })
 await novoUser.save()
    console.log("fui chamado")
}

export const verificador =(usuario, senha,navigation)=> {
    const senhaErrada = () =>
    Alert.alert(
      "Login ou senha inválidos",
      "Verifique e tente de novo",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    const user = usuario
    const password = senha
   const usuarios = {
       columns:'usuario,senha',
       where:{
           usuario_eq: user,
           senha_eq:password
       },
       page:1,
       limit:1,
       order:'usuario ASC'
   }
  const god = Usuario.query(usuarios)
  console.log(god)
    if(god === null){
        return senhaErrada
    } 
    else {
        return (()=>navigation.navigate("Home"))
    }
}

// export const verifyUser = async (usuario, senha, setListaUsuarios, listaUsuarios, navigation) => {
//     const novoUsuario = new Usuario({
//       usuario: usuario,
//       senha: senha,
//   });

//     for (let i = 0; i < listaUsuarios.length; i++) {
//         if (novoUsuario.usuario == listaUsuarios[i].usuario && novoUsuario.senha == listaUsuarios[i].senha) {
//             return (
//                 () => navigation.navigate("Home")
//             );
//         }else{
//             await novoUsuario.save();
//         };
//     };
//     setListaUsuarios(getAllUsers());
// };

export const getAllUsers = async () => {
    return await Usuario.query();
};