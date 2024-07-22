import { FunctionComponent } from "react";
import styled from "styled-components";
import InterfaceLogin from "../components/InterfaceLogin";

const PginaLoginChild = styled.div`
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
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: lighten;
  z-index: 2;
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
const LateralLogin = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  filter: blur(13.1px);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0),
    rgba(255, 255, 255, 0.12)
  );
  z-index: 4;
`;
const AcesseNossaPlataforma = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
  font-weight: 500;
`;
const Nossa = styled.span`
  font-weight: 500;
`;
const Tecnologia = styled.span`
  font-weight: 800;
  font-family: var(--font-mulish);
`;
const PodePotencializar = styled.span`
  font-weight: 500;
  font-family: var(--font-mulish);
`;
const NossaTecnologiaPodePotencia = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
`;
const SuaGestoContratual = styled.p`
  margin: 0;
  font-weight: 500;
`;
const AcesseNossaPlataformaContainer = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  line-height: 0.875rem;
  z-index: 6;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 0.688rem;
  }
`;
const AcesseNossaPlataformaEExplWrapper = styled.div`
  width: 24.875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.437rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const SejaBemVindoa = styled.h1`
  margin: 0;
  width: 21.188rem;
  position: relative;
  font-size: 2rem;
  letter-spacing: 1px;
  line-height: 2.438rem;
  font-weight: 800;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 5;
  margin-left: -24.375rem;
  @media screen and (max-width: 975px) {
    font-size: var(--font-size-7xl);
    line-height: 1.938rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 1.438rem;
  }
`;
const PlatformDescription = styled.div`
  width: 32.112rem;
  margin: 0 !important;
  position: absolute;
  top: -20.637rem;
  right: -11.425rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3.95rem 1.812rem 22.337rem;
  box-sizing: border-box;
`;
const Grantosegurosimage1Icon = styled.img`
  height: 14.438rem;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 5;
`;
const WelcomeMessage = styled.div`
  position: absolute;
  top: 35.188rem;
  left: 20.938rem;
  width: 16.063rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LogoGrantoIcon = styled.img`
  position: absolute;
  top: 4.813rem;
  left: 41.75rem;
  width: 8.188rem;
  height: 3.625rem;
  object-fit: contain;
  z-index: 3;
`;
const BackgroundShapes = styled.main`
  width: 120rem;
  height: 92.5rem;
  position: absolute;
  margin: 0 !important;
  right: -30rem;
  bottom: -28.5rem;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 14.55rem 17.875rem 14.668rem;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  @media screen and (max-width: 1025px) {
    padding-left: var(--padding-124xl);
    padding-right: var(--padding-124xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 975px) {
    padding-top: var(--padding-132xl);
    padding-bottom: var(--padding-134xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 725px) {
    padding-left: var(--padding-52xl);
    padding-right: var(--padding-52xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding: var(--padding-79xl) var(--padding-xl) var(--padding-80xl);
    box-sizing: border-box;
  }
`;
const PginaLoginRoot = styled.div`
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

const PginaLogin: FunctionComponent = () => {
  return (
    <PginaLoginRoot>
      <PginaLoginChild />
      <ImagemFundoIcon alt="" src="/imagem-fundo@2x.png" />
      <Content>
        <InterfaceLogin />
        <BackgroundShapes>
          <Bg />
          <WelcomeMessage>
            <PlatformDescription>
              <LateralLogin />
              <AcesseNossaPlataformaEExplWrapper>
                <AcesseNossaPlataformaContainer>
                  <AcesseNossaPlataforma>{`Acesse nossa plataforma e explore como `}</AcesseNossaPlataforma>
                  <NossaTecnologiaPodePotencia>
                    <Nossa>{`nossa `}</Nossa>
                    <Tecnologia>tecnologia</Tecnologia>
                    <PodePotencializar> pode potencializar</PodePotencializar>
                  </NossaTecnologiaPodePotencia>
                  <SuaGestoContratual>
                    sua gestão contratual!
                  </SuaGestoContratual>
                </AcesseNossaPlataformaContainer>
              </AcesseNossaPlataformaEExplWrapper>
              <SejaBemVindoa>Seja bem vindo(a),</SejaBemVindoa>
            </PlatformDescription>
            <Grantosegurosimage1Icon
              loading="lazy"
              alt=""
              src="/grantosegurosimage-1@2x.png"
            />
          </WelcomeMessage>
          <LogoGrantoIcon loading="lazy" alt="" src="/logo-granto1@2x.png" />
        </BackgroundShapes>
      </Content>
    </PginaLoginRoot>
  );
};

export default PginaLogin;
