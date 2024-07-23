import { FunctionComponent, useState, useCallback } from "react";
import Main from "../components/Main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";

const DocumentIcon = styled.img`
  height: 15.063rem;
  width: 15.063rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
`;
const DocumentWrapper = styled.div`
  width: 45.438rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const BlankLine = styled.span`
  font-size: 2.375rem;
`;
const SejaBemVindoa = styled.span``;
const SejaBemVindoaAoSeuPort = styled.p`
  margin: 0;
`;
const ArrasteSeusArquivos = styled.p`
  margin: 0;
  font-size: var(--font-size-xl);
`;
const SejaBemVindoaContainer = styled.div`
  position: relative;
  display: inline-block;
  min-height: 12.75rem;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2.187rem;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    gap: 1.063rem;
  }
`;
const BackofficeInner = styled.div`
  width: 48.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 22.562rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1050px) {
    padding-top: 14.688rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-134xl);
    box-sizing: border-box;
  }
`;
const BackofficeRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: rgba(50, 48, 182, 0.33);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 13.118rem;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: 1.875rem;
  color: var(--color-black);
  font-family: var(--font-mulish);
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 6.563rem;
  }
  @media screen and (max-width: 750px) {
    gap: 3.25rem;
  }
  @media screen and (max-width: 450px) {
    gap: 1.625rem;
  }
`;

const UploadAreaParent = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 2px dashed #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;

const UploadArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 16px;
  text-align: center;
`;

const StyledButton = styled.section`
  border-radius: 11px;
  background-color: #4510a3;
  min-height: 50px;
  max-width: 184px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;


const BackOffice: FunctionComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length) {
      setFile(files[0]);
      setMessage(`Arquivo selecionado: ${files[0].name}`);
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleUpload = useCallback(async () => {
    if (!file) {
      setMessage("Nenhum arquivo selecionado");
      alert("Nenhum arquivo selecionado");
      return;
    }

    const secretToken = localStorage.getItem("secretToken");
    if (!secretToken) {
      setMessage("Token não encontrado. Faça login novamente.");
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://grantosegurosapimanagement-production.up.railway.app/ursula/upload", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${secretToken}`,
          'accept': '*/*'
        },
        body: formData,
      });

      if (response.ok) {
        setMessage("Upload realizado com sucesso");
        alert("Upload realizado com sucesso");
        // Fazer a navegação ou atualizar a tabela após o upload
      } else {
        const errorData = await response.json();
        setMessage(`Falha no upload: ${errorData.message}`);
        alert(`Falha no upload: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Erro no upload:", error);
      setMessage("Erro no upload");
      alert("Erro no upload");
    }
  }, [file]);


  return (
    <BackofficeRoot>
      <Main />
      <BackofficeInner>
        <FrameParent>
          <DocumentWrapper>
            <DocumentIcon loading="lazy" alt="" src="/document.svg" />
          </DocumentWrapper>
          <SejaBemVindoaContainer>
            <SejaBemVindoaAoSeuPort>
              <BlankLine>&nbsp;</BlankLine>
              <SejaBemVindoa>{`Seja bem vindo(a), ao seu portal de análise de contratos
`}</SejaBemVindoa>
            </SejaBemVindoaAoSeuPort>
            <ArrasteSeusArquivos>
              <UploadAreaParent
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <UploadArea>
                  {file ? file.name : "Arraste e solte um arquivo aqui"}
                </UploadArea>
              </UploadAreaParent>
            </ArrasteSeusArquivos>
            <StyledButton onClick={handleUpload}>Upload</StyledButton>
            {message && <p>{message}</p>}
          </SejaBemVindoaContainer>
        </FrameParent>
      </BackofficeInner>
    </BackofficeRoot>
  );
};

export default BackOffice;
