import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


export async function getAllDetails() {
    const registerUrl = `${API_URL}/users/ursula/documents`;
    try {
      const response = await axios.get(registerUrl);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar o cadastro:', error);
      alert('Erro ao realizar o login. Usuário ou Senha inválidos.');
      return false;
    }
  }
  
  export async function uploadDocument(file) {
    const uploadUrl = `${API_URL}/users/ursula/upload`;
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(uploadUrl, formData, {
        headers: {
          'accept': token || '*/*',
          'Content-Type': 'multipart/form-data',
        }
      });
  
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
      throw error;
    }
  }  
  
