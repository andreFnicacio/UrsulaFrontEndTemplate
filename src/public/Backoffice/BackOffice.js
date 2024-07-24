import React, { useCallback, useState } from "react";
import { uploadDocument } from '../../services/UrsulaService';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import "./BackOffice.css";

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
      setIsLoading(true);
      setErrorMessage("");

      try {
        const data = await uploadDocument(file);
        setUploadedFiles([data.document]); // Assumindo que `document` é o objeto retornado
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
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell>CNPJ Contratante</TableCell>
                    <TableCell>Valor Contratado</TableCell>
                    <TableCell>Validade Inicial</TableCell>
                    <TableCell>Duração</TableCell>
                    <TableCell>Contratante</TableCell>
                    <TableCell>Contratada</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {uploadedFiles.map((file, index) => (
                    <TableRow key={index}>
                      <TableCell>{file.id}</TableCell>
                      <TableCell>{file.category}</TableCell>
                      <TableCell>{file.cnpj_contratante}</TableCell>
                      <TableCell>{file.contracted_value}</TableCell>
                      <TableCell>{file.initial_validity}</TableCell>
                      <TableCell>{file.duration}</TableCell>
                      <TableCell>{file.contratante}</TableCell>
                      <TableCell>{file.contratada}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
      </div>
    </div>
  );
};

export default BackOffice;
