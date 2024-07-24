import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function doLogin(email, password) {
  const registerUrl = `${API_URL}/users/login`;
  try {
    const response = await axios.post(registerUrl, { email, password });
    if (response.status === 201 || response.status === 200) {
      alert('Login sucesso!');
      return true;
    } else {
      alert('Erro ao realizar o login. Usuário ou Senha inválidos.');
      return false;
    }
  } catch (error) {
    console.error('Erro ao realizar o cadastro:', error);
    alert('Erro ao realizar o login. Usuário ou Senha inválidos.');
    return false;
  }
}

export async function doRegister(name, phone, email, password) {
  const registerUrl = `${API_URL}/users/register`;
  try {
    const response = await axios.post(registerUrl, { name, phone, email, password });
    if (response.status === 201 || response.status === 200) {
      alert('Cadastro realizado com sucesso!');
      return true;
    } else {
      alert('Erro ao realizar o cadastro. Tente novamente.');
      return false;
    }
  } catch (error) {
    console.error('Erro ao realizar o cadastro:', error);
    alert('Erro ao realizar o cadastro. Tente novamente.');
    return false;
  }
}
