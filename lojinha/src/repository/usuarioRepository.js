import Usuario from '../model/Usuario';

export const createTable = async () => {
    await Usuario.createTable();
};

export const verifyUser = async (usuario, senha, setListaUsuarios, listaUsuarios, navigation) => {
    const novoUsuario = new Usuario({
        usuario: usuario,
        senha: senha,
    });

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (novoUsuario.usuario == listaUsuarios[i].usuario && novoUsuario.senha == listaUsuarios[i].senha) {
            return (
                () => navigation.navigate("Home")
            );
        } else {
            return (
                novoUsuario.save()),
                await setListaUsuarios(getAllUsers());
        };
    };
};

export const getAllUsers = async () => {
    return await Usuario.query();
};