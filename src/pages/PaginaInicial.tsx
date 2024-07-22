import { FunctionComponent } from "react";
import styled from "styled-components";
import Navigation1 from "../components/Navigation1";
import Hero from "../components/Hero";

const PaginaInicialChild = styled.div`
  width: 90rem;
  height: 64rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
  z-index: 0;
`;
const DesignSemNome = styled.img`
  width: 122.688rem;
  position: relative;
  max-height: 100%;
  object-fit: cover;
  mix-blend-mode: screen;
  max-width: 137%;
  flex-shrink: 0;
`;
const Shape = styled.div`
  width: 23.313rem;
  height: 21.25rem;
  position: relative;
  border-radius: 41px;
  background-color: #461aa5;
  max-width: 100%;
`;
const Bg = styled.main`
  width: 100%;
  margin: 0 !important;
  position: absolute;
  right: 0rem;
  bottom: -51rem;
  left: 0rem;
  box-shadow: 32px 35px 46.2px rgba(0, 0, 0, 0.37) inset;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  max-width: 100%;
  z-index: 1;
`;
const MeninaDoFundo = styled.img`
  height: 100%;
  flex: 1;
  overflow: hidden;
  mix-blend-mode: soft-light;
  z-index: 2;
  object-fit: contain;
  position: absolute;
  left: 0rem;
  top: 0rem;
  width: 100%;
  transform: scale(1.014);
`;
const WrapperMeninaDoFundo = styled.div`
  height: 64rem;
  flex: 1;
  position: relative;
  max-width: 100%;
  mix-blend-mode: soft-light;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoGrantoIcon = styled.img`
  height: 5.863rem;
  width: 11.244rem;
  position: absolute;
  margin: 0 !important;
  top: 1.125rem;
  left: 5.188rem;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 4;
`;
const Content = styled.div`
  width: 89.313rem;
  height: 64rem;
  margin: 0 !important;
  position: absolute;
  top: 0rem;
  left: 0rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
`;
const PaginaInicialRoot = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(119.78deg, #4510a3, #0cd2ab);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-19xl) 0.625rem 22.687rem 6.312rem;
  gap: 0.4rem;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 825px) {
    padding-left: 3.125rem;
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const PaginaInicial: FunctionComponent = () => {
  return (
    <PaginaInicialRoot>
      <PaginaInicialChild />
      <Bg>
        <DesignSemNome alt="" src="/design-sem-nome-1@2x.png" />
        <Shape />
      </Bg>
      <Content>
        <WrapperMeninaDoFundo>
          <MeninaDoFundo alt="" src="/menina-do-fundo@2x.png" />
        </WrapperMeninaDoFundo>
        <LogoGrantoIcon loading="lazy" alt="" src="/logo-granto.svg" />
      </Content>
      <Navigation1 />
      <Hero />
    </PaginaInicialRoot>
  );
};

export default PaginaInicial;
