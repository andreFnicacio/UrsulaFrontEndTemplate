import React, { useCallback, useState } from "react";
import "./BackOffice.css";
import { getToken } from '../../utils/storage'; // Importe a função utilitária

const BackOffice = () => {
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onMenuLogoClick = useCallback(() => {
    // Please sync "Pagina Inicial" to the project
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file, file.name);

      setIsLoading(true);
      setErrorMessage("");

      try {
        const token = getToken(); // Obtenha o token do localStorage
        const response = await fetch("https://grantosegurosapimanagement-production.up.railway.app/users/ursula/upload", {
          method: 'POST',
          headers: {
            'accept': 'aa6a9a9b-c252-4288-8bd1-5c5f341813cd',
            'Content-Type': 'multipart/form-data'
          },
          body: formData
        });
        console.log(response)
        if (response.status === 200) {
          const data = await response.json();
          setUploadedFiles([data]); // Supondo que o endpoint retorne um objeto de arquivo único
        } else {
          setErrorMessage("Falha no upload do arquivo");
        }
      } catch (error) {
        setErrorMessage("Erro ao fazer upload do arquivo: " + error.message);
      } finally {
        setIsLoading(false);
        event.target.value = null; // Limpar o input de arquivo
      }
    }
  };

  return (
    <div className="backoffice">
      <div className="menu-lateral">
        <div className="bg-menu-lateral" />
        <button className="b-home" autoFocus={true} id="homeBUTTON">
          <div className="b-home-child" />
          <div className="home">Home</div>
          <img className="b-home-item" alt="" src="/group-14.svg" />
          <div className="b-home-inner" />
        </button>
        <button
          className="b-enviar-arquivo"
          autoFocus={true}
          id="enviararquivo"
          onClick={() => document.getElementById('fileInput').click()}
        >
          <div className="b-enviar-arquivo-child" />
          <div className="enviar-arquivo"> Enviar Arquivo</div>
          <b className="b">+</b>
        </button>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <a className="menu-logo" id="logoButton" onClick={onMenuLogoClick}>
          <img
            className="logoa-1-icon"
            alt=""
            src="/logoa-1@2x.png"
            onClick={onMenuLogoClick}
          />
          <img className="layer-2-icon" alt="" src="/layer-2.svg" />
        </a>
        <img className="user-icon" alt="" src="/user@2x.png" />
      </div>
      <div className="centro-bg">
        {isLoading ? (
          <div className="loading">Carregando...</div>
        ) : errorMessage ? (
          <div className="error-message">{errorMessage}</div>
        ) : uploadedFiles ? (
          <div className="file-details">
            <h2>Detalhes dos Documentos</h2>
            <table>
              <thead>
                <tr>
                  <th>Nome do Arquivo</th>
                  <th>Tamanho</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {uploadedFiles.map((file, index) => (
                  <tr key={index}>
                    <td>{file.name}</td>
                    <td>{file.size} bytes</td>
                    <td>{file.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="seja-bem-vindoa-container">
            <p className="seja-bem-vindoa-ao-seu-port">
              <span className="blank-line">&nbsp;</span>
              <span>{`Seja bem vindo(a), ao seu portal de análise de contratos`}</span>
            </p>
            <p className="arraste-seus-arquivos">{`Arraste seus arquivos e pastas para cá ou use o botão "Enviar arquivo"
            para fazer upload e começar a analisar.`}</p>
          </div>
        )}
        <button className="document" autoFocus={true} id="uploadClick">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
          <img className="vector-icon4" alt="" src="/vector4.svg" />
        </button>
      </div>
    </div>
  );
};

export default BackOffice;
