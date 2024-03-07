export const userRegisterController = async (email: string, nome: string, senha: string) => {
    // Chamada ao serviço de registro de usuário
    const resultado = await userRegisterServices.registrarUsuario(email, nome, senha);
    return resultado;
};
