import React, { useCallback, useEffect, useState } from "react";
import { getAllDetails, uploadDocument } from '../../services/UrsulaService'; // Importando as funções do serviço
import "./BackOffice.css";

const BackOffice = () => {
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const onMenuLogoClick = useCallback(() => {
    // Please sync "Pagina Inicial" to the project
  }, []);

  useEffect(() => {
    const fetchDocuments = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const data = await getAllDetails();
        setDocuments(data);
      } catch (error) {
        setErrorMessage("Erro ao buscar documentos: " + error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const data = await uploadDocument(file);
        const updatedDocuments = await getAllDetails(); // Atualizar a lista de documentos após upload bem-sucedido
        setDocuments(updatedDocuments);
      } catch (error) {
        setErrorMessage("Erro ao fazer upload do arquivo: " + error.message);
      } finally {
        setIsLoading(false);
        event.target.value = null; // Limpar o input de arquivo
      }
    }
  };

  // Calcular o índice dos documentos para a página atual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = documents.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        ) : documents.length > 0 ? (
          <div className="file-details card border-0 shadow">
            <div className="card-body">
              <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead className="thead-light">
                    <tr>
                      <th className="border-0 rounded-start">ID</th>
                      <th className="border-0">Categoria</th>
                      <th className="border-0">CNPJ Contratante</th>
                      <th className="border-0">Valor Contratado</th>
                      <th className="border-0">Validade Inicial</th>
                      <th className="border-0">Duração</th>
                      <th className="border-0">Contratante</th>
                      <th className="border-0 rounded-end">Contratada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDocuments.map((document, index) => (
                      <tr key={index}>
                        <td className="border-0">{document.id}</td>
                        <td className="border-0">{document.category}</td>
                        <td className="border-0">{document.cnpj_contratante}</td>
                        <td className="border-0">{document.contracted_value}</td>
                        <td className="border-0">{document.initial_validity}</td>
                        <td className="border-0">{document.duration}</td>
                        <td className="border-0">{document.contratante}</td>
                        <td className="border-0">{document.contratada}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination">
                {Array.from({ length: Math.ceil(documents.length / itemsPerPage) }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
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
        {!documents.length && (
          <button className="document" autoFocus={true} id="uploadClick" onClick={() => document.getElementById('fileInput').click()}>
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="vector-icon1" alt="" src="/vector1.svg" />
            <img className="vector-icon2" alt="" src="/vector2.svg" />
            <img className="vector-icon3" alt="" src="/vector3.svg" />
            <img className="vector-icon4" alt="" src="/vector4.svg" />
          </button>
        )}
      </div>
    </div>
  );
};

export default BackOffice;
