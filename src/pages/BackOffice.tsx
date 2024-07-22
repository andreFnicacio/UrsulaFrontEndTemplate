import { FunctionComponent } from "react";
import Main from "../components/Main";
import styled from "styled-components";

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

const BackOffice: FunctionComponent = () => {
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
            <ArrasteSeusArquivos>{`Arraste seus arquivos e pastas para cá ou use o botão "Enviar arquivo"
 para fazer upload e começar a analisar.`}</ArrasteSeusArquivos>
          </SejaBemVindoaContainer>
        </FrameParent>
      </BackofficeInner>
    </BackofficeRoot>
  );
};

export default BackOffice;
