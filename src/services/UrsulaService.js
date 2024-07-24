import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export async function getDetails(token) {
    const registerUrl = `${API_URL}/users/ursula/documents`;
    try {
      const response = await axios.get(registerUrl, {"accept": token});
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error);
      alert('Erro ao realizar o login. Usuário ou Senha inválidos.');
      return false;
    }
  }
  
