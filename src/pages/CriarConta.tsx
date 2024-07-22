import { FunctionComponent } from "react";
import styled from "styled-components";
import InterfaceCadastro from "../components/interfaceCadastro"; // Certifique-se de que o caminho está correto

const CriarContaChild = styled.div`
  height: 64rem;
  width: 90rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;

const ImagemFundoIcon = styled.img`
  height: 131.75rem;
  width: 234.188rem;
  position: absolute;
  margin: 0 !important;
  bottom: -40.187rem;
  left: -100.812rem;
  object-fit: cover;
  mix-blend-mode: lighten;
  z-index: 1;
`;

const Bg = styled.section`
  position: absolute;
  top: 0rem;
  left: 0rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const LogoGrantoIcon = styled.img`
  position: absolute;
  top: 4.813rem;
  left: 41.75rem;
  width: 8.188rem;
  height: 3.625rem;
  object-fit: cover;
  z-index: 3;
`;

const BgParent = styled.main`
  width: 120rem;
  height: 92.5rem;
  position: absolute;
  margin: 0 !important;
  right: -30rem;
  bottom: -28.5rem;
`;

const InterfaceLoginParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 14.562rem 18rem 14.656rem;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 1025px) {
    padding-left: var(--padding-125xl);
    padding-right: var(--padding-125xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 975px) {
    padding-top: var(--padding-132xl);
    padding-bottom: 9.5rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 725px) {
    padding-left: var(--padding-53xl);
    padding-right: var(--padding-53xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: var(--padding-79xl) var(--padding-xl) var(--padding-80xl);
    box-sizing: border-box;
  }
`;

const CriarContaRoot = styled.div`
  width: 100%;
  position: relative;
  background-color: var(--color-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
`;

const CriarConta: FunctionComponent = () => {
  return (
    <CriarContaRoot>
      <CriarContaChild />
      <ImagemFundoIcon alt="" src="/imagem-fundo1@2x.png" />
      <InterfaceLoginParent>
        <InterfaceCadastro /> {/* Use o componente com a letra maiúscula */}
        <BgParent>
          <Bg />
          <LogoGrantoIcon loading="lazy" alt="" src="/logo-granto1@2x.png" />
        </BgParent>
      </InterfaceLoginParent>
    </CriarContaRoot>
  );
};

export default CriarConta;
