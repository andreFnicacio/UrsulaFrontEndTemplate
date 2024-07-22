import { FunctionComponent, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type Navigation1Type = {
  className?: string;
};

const SaberMais = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: inherit;
  white-space: nowrap;
  cursor: pointer;
`;
const Links = styled.div`
  width: 10.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0rem 0rem;
  box-sizing: border-box;
`;
const Links1 = styled.div`
  width: 11.563rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-xl) 0rem 0rem;
  box-sizing: border-box;
  margin-left: -0.938rem;
`;
const Cadastro = styled.a`
  text-decoration: none;
  align-self: stretch;
  position: relative;
  line-height: 1.25rem;
  color: inherit;
  cursor: pointer;
`;
const Links2 = styled.div`
  width: 11.063rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-mini) 0rem 0rem;
  box-sizing: border-box;
  margin-left: -0.938rem;
`;
const FazerLogin = styled.a`
  text-decoration: none;
  width: 7.375rem;
  position: relative;
  line-height: 1.438rem;
  color: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  cursor: pointer;
  z-index: 4;
  margin-left: -0.938rem;
`;
const MenuTopo = styled.nav`
  margin: 0;
  flex: 1;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  border-radius: var(--br-3xs);
  background-color: var(--color-darkblue-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-3xl-5) var(--padding-89xl) var(--padding-xl-6);
  box-sizing: border-box;
  max-width: 100%;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  font-family: var(--font-mulish);
  @media screen and (max-width: 825px) {
    padding-left: var(--padding-35xl);
    padding-right: var(--padding-35xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 675px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const NavigationRoot = styled.header`
  width: 78.625rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 675px) {
    width: 0.394rem;
  }
`;

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onSaberMaisTextClick = useCallback(() => {
    window.open("https://jsevitor.github.io/desafio-granto-landing-page/");
  }, []);

  const onCadastroTextClick = useCallback(() => {
    navigate("/criar-conta");
  }, [navigate]);

  const onFazerLoginTextClick = useCallback(() => {
    navigate("/pgina-login");
  }, [navigate]);

  return (
    <NavigationRoot className={className}>
      <MenuTopo>
        <Links>
          <SaberMais onClick={onSaberMaisTextClick}>Saber Mais</SaberMais>
        </Links>
        <Links1>
          <SaberMais onClick={onSaberMaisTextClick}>Fale conosco</SaberMais>
        </Links1>
        <Links2>
          <Cadastro onClick={onCadastroTextClick}>Cadastro</Cadastro>
        </Links2>
        <FazerLogin onClick={onFazerLoginTextClick}>Fazer Login</FazerLogin>
      </MenuTopo>
    </NavigationRoot>
  );
};

export default Navigation1;
