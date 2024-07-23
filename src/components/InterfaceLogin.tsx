import { FunctionComponent, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type InterfaceLoginType = {
  className?: string;
};

const InterfaceLoginChild = styled.div`
  width: 27.619rem;
  height: 34.781rem;
  position: relative;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  display: none;
  max-width: 100%;
`;
const Login = styled.h1`
  margin: 0;
  width: 8.063rem;
  position: relative;
  font-size: inherit;
  letter-spacing: 1px;
  line-height: 3.25rem;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 5.125rem;
  }
`;
const EmailInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem var(--padding-xl) 0rem var(--padding-34xl);
`;
const FaaLoginPara = styled.div`
  align-self: stretch;
  height: 1.875rem;
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
  line-height: 6.375rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 4;
  margin-top: -0.563rem;
`;
const LoginFields = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ForgotPassword = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-27xl) var(--padding-2xs) var(--padding-19xl);
  @media screen and (max-width: 450px) {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const EMail = styled.div`
  width: 10.381rem;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const EmailExampleChild = styled.div`
  height: 2.294rem;
  width: 21.794rem;
  position: relative;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const Emailexemplocom = styled.input`
  width: 10.35rem;
  border: none;
  outline: none;
  font-family: var(--font-inter);
  font-size: var(--font-size-xs);
  background-color: transparent;
  height: 1.231rem;
  position: relative;
  color: var(--color-darkgray);
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  padding: 0;
  z-index: 2;
`;

const EmailExample = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lgi) var(--padding-12xs);
  max-width: 100%;
  z-index: 1;
  color: var(--color-darkgray);
`;
const EmailInput1 = styled.div`
  width: 21.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
  max-width: 100%;
`;
const Senha = styled.div`
  width: 10.331rem;
  position: relative;
  display: inline-block;
  z-index: 1;
`;
const PasswordFieldChild = styled.div`
  height: 2.338rem;
  width: 21.681rem;
  position: relative;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const PasswordPlaceholder = styled.input`
  width: 10.294rem;
  border: none;
  outline: none;
  font-family: var(--font-inter);
  font-size: var(--font-size-xs);
  background-color: transparent;
  height: 1.256rem;
  position: relative;
  color: var(--color-darkgray);
  text-align: left;
  display: inline-block;
  padding: 0;
  z-index: 2;
`;
const PasswordField = styled.div`
  width: 21.681rem;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-lgi) var(--padding-12xs);
  max-width: 100%;
  z-index: 1;
`;
const EsqueceuASenha = styled.div`
  height: 1.256rem;
  width: 10.331rem;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const LoginField = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
`;
const EmailField = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs-8);
  max-width: 100%;
`;
const LoginInput = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-2xs-3);
  max-width: 100%;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
`;
const Login1 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 1.5rem;
  font-family: var(--font-mulish);
  color: var(--color-darkblue-100);
  text-align: center;
`;
const BotoIniciarSesso = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-2xs-7) var(--padding-18xl) var(--padding-3xs-7);
  background-color: var(--color-mediumaquamarine-100);
  width: 21.794rem;
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  max-width: 100%;
  z-index: 5;
  &:hover {
    background-color: var(--color-mediumaquamarine-200);
  }
`;
const LoginFields1 = styled.div`
  align-self: stretch;
  height: 19.213rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-46xl-4);
  box-sizing: border-box;
  gap: var(--gap-2xl);
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-bottom: var(--padding-24xl);
    box-sizing: border-box;
  }
`;
const CrieUmaConta = styled.span``;
const GrantoSeguros = styled.b`
  color: var(--color-darkblue-100);
`;
const CrieUmaContaContainer = styled.span`
  width: 100%;
`;
const CrieUmaContaContainer1 = styled.div`
  position: absolute;
  top: 0.419rem;
  left: calc(50% - 256.65px);
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  width: 32.063rem;
  height: 1.5rem;
`;
const UtilizandoAPlataforma = styled.div`
  position: absolute;
  top: -2.394rem;
  left: 2.106rem;
  font-size: var(--font-size-xs);
  letter-spacing: 1px;
  line-height: 6.375rem;
  font-weight: 600;
  color: var(--color-gray-200);
  text-align: left;
  display: flex;
  align-items: center;
  width: 18.063rem;
  height: 2.063rem;
`;
const CriarConta = styled.div`
  width: 21.794rem;
  height: 2.775rem;
  position: relative;
  border-radius: var(--br-9xs);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-mediumaquamarine-100);
  box-sizing: border-box;
  max-width: 100%;
  cursor: pointer;
  z-index: 5;
  text-align: center;
  font-size: var(--font-size-base);
`;
const InterfaceLoginRoot = styled.div`
  width: 27.644rem;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-18xl-2) 0rem var(--padding-33xl-6) var(--padding-19xl);
  box-sizing: border-box;
  gap: var(--gap-95xl-9);
  max-width: 100%;
  z-index: 3;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
  font-family: var(--font-mulish);
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-5xl);
    padding-bottom: var(--padding-15xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-38xl);
  }
`;

const interfaceLogin: FunctionComponent<InterfaceLoginType> = ({
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const user = { email, password };
    console.log(user);

    try {
      const response = await fetch('https://grantosegurosapimanagement-production.up.railway.app/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("secretToken", data.user.secretToken);
        navigate("/backoffice");
      } else {
        const errorData = await response.json();
        console.error('Erro na resposta:', errorData);
        alert('Erro no login, tente novamente 😬');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro no login, tente novamente 😬');
    }
  }, [email, password, navigate]);

  return (
    <InterfaceLoginRoot className={className}>
      <InterfaceLoginChild />
      <LoginFields1>
        <ForgotPassword>
          <LoginFields>
            <EmailInput>
              <Login>LOGIN</Login>
            </EmailInput>
            <FaaLoginPara>Faça login para acessar nosso sistema</FaaLoginPara>
          </LoginFields>
        </ForgotPassword>
        <LoginInput>
          <EmailInput1>
            <EMail>E-mail</EMail>
            <EmailExample>
              <EmailExampleChild />
              <Emailexemplocom
                placeholder="email@exemplo.com"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </EmailExample>
          </EmailInput1>
          <EmailField>
            <Senha>Senha</Senha>
            <PasswordField>
              <PasswordFieldChild />
              <PasswordPlaceholder
                placeholder="************"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </PasswordField>
            <LoginField>
              <EsqueceuASenha>Esqueceu a senha?</EsqueceuASenha>
            </LoginField>
          </EmailField>
        </LoginInput>
        <BotoIniciarSesso onClick={onBotoIniciarSessoClick}>
          <Login1>Login</Login1>
        </BotoIniciarSesso>
      </LoginFields1>
      <CriarConta>
        <CrieUmaContaContainer1>
          <CrieUmaContaContainer>
            <CrieUmaConta>{`Crie uma conta na `}</CrieUmaConta>
            <GrantoSeguros>Granto Seguros</GrantoSeguros>
          </CrieUmaContaContainer>
        </CrieUmaContaContainer1>
        <UtilizandoAPlataforma>{`Utilizando a plataforma pela primeira vez? `}</UtilizandoAPlataforma>
      </CriarConta>
    </InterfaceLoginRoot>
  );
};

export default interfaceLogin;
