import { FunctionComponent, useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export type interfaceCadastroType = {
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
  z-index: 0;
`;
const CriarConta = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: var(--font-size-5xl);
  letter-spacing: 1px;
  line-height: 3.25rem;
  font-weight: 700;
  font-family: var(--font-mulish);
  color: var(--color-black);
  text-align: left;
  z-index: 4;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lgi);
    line-height: 5.125rem;
  }
`;
const CriarContaWrapper = styled.div`
  width: 20.281rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-59xl);
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const PreenchaOsCampos = styled.div`
  align-self: stretch;
  height: 1.875rem;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 6.375rem;
  font-weight: 600;
  font-family: var(--font-mulish);
  color: var(--color-black);
  text-align: left;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 4;
  margin-top: -0.438rem;
`;
const FrameParent = styled.div`
  width: 25.188rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 125%;
  flex-shrink: 0;
`;
const InterfaceLoginInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-base) var(--padding-19xl) var(--padding-6xl);
  box-sizing: border-box;
  max-width: 100%;
`;
const Nome = styled.div`
  width: 10.381rem;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color-black);
  text-align: left;
  display: inline-block;
  z-index: 1;
`;
const InputValuesChild = styled.div`
  height: 2.294rem;
  width: 21.794rem;
  position: relative;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: none;
  max-width: 100%;
`;
const UrsulaGrantoSeguros = styled.input`
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
  padding: 0;
  z-index: 2;
`;
const InputValues = styled.div`
  align-self: stretch;
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-lg) var(--padding-9xs);
  max-width: 100%;
  z-index: 1;
`;
const InputsRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs);
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
const RectangleParent = styled.div`
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
`;
const SenhaParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xs-9);
  max-width: 100%;
`;
const InputContainers = styled.div`
  height: 10.538rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem var(--padding-38xl-9);
  box-sizing: border-box;
  gap: var(--gap-7xs-3);
  max-width: 100%;
`;
const InputContainersWrapper = styled.div`
  width: 21.938rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs) var(--padding-12xl-4);
  box-sizing: border-box;
  max-width: 100%;
`;
const Continuar = styled.div`
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
  padding: var(--padding-2xs) var(--padding-4xl) var(--padding-2xs);
  background-color: var(--color-mediumaquamarine-100);
  flex: 1;
  border-radius: var(--br-9xs);
  display: flex;
  flex-direction: row;
  align-items: center; // Alinhamento vertical centralizado
  justify-content: center; // Alinhamento horizontal centralizado
  box-sizing: border-box;
  max-width: 100%;
  z-index: 5;
  &:hover {
    background-color: var(--color-mediumaquamarine-200);
  }
`;

const BotoIniciarSessoWrapper = styled.div`
  width: 21.794rem;
  display: flex;
  flex-direction: row;
  align-items: center; // Alinhamento vertical centralizado
  justify-content: center; // Alinhamento horizontal centralizado
  padding: var(--padding-2xs) 0 var(--padding-xs); // Ajuste de padding
  box-sizing: border-box;
  max-width: 100%;
  margin-top: var(--gap-sm); // Adiciona uma margem superior para mais espaçamento
`;


const FrameItem = styled.img`
  width: 7.188rem;
  height: 0.063rem;
  position: relative;
  flex-shrink: 0;
  z-index: 5;
`;
const VectorWrapper = styled.div`
  width: 31.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const Ou = styled.div`
  height: 3.313rem;
  width: 25.938rem;
  position: relative;
  font-size: var(--font-size-xs);
  font-family: var(--font-inter);
  color: var(--color-silver-200);
  text-align: left;
  display: inline-block;
  flex-shrink: 0;
  max-width: 100%;
  z-index: 4;
  margin-left: -21.875rem;
`;
const GetAnIntervention = styled.img`
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 4;
`;
const GetAnInterventionWrapper = styled.div`
  width: 7.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0rem 0rem;
  box-sizing: border-box;
  margin-left: -21.875rem;
`;
const FrameGroup = styled.div`
  width: 35.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 157%;
  flex-shrink: 0;
`;
const EntreEmUma = styled.p`
  margin: 0;
  font-family: var(--font-mulish);
  color: var(--color-black);
`;
const Da = styled.span`
  font-family: var(--font-mulish);
  color: var(--color-black);
`;
const GrantoSeguros = styled.b`
  font-family: var(--font-mulish);
  color: var(--color-darkblue-100);
`;
const DaGrantoSeguros = styled.p`
  margin: 0;
`;
const EntreEmUmaContainer = styled.span`
  width: 100%;
`;
const EntreEmUmaContainer1 = styled.div`
  width: 32.063rem;
  position: absolute;
  margin: 0 !important;
  top: 0.419rem;
  right: -5.169rem;
  font-size: var(--font-size-base);
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  text-align: center;
  display: flex;
  align-items: center;
`;
const CriarConta1 = styled.div`
  margin-top: -0.438rem;
  height: 3.875rem;
  flex: 1;
  border-radius: var(--br-9xs);
  background-color: var(--color-gray-300);
  border: 1px solid var(--color-mediumaquamarine-100);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  z-index: 5;
`;
const CriarContaContainer = styled.div`
  width: 21.813rem;
  height: 3.438rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem 0rem 0rem;
  box-sizing: border-box;
  max-width: 100%;
`;
const LateralLogin = styled.div`
  width: 100%;
  height: 100%;
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
const CrieSuaConta = styled.h1`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-15xl);
  letter-spacing: 1px;
  line-height: 2.438rem;
  font-weight: 800;
  font-family: var(--font-mulish);
  color: var(--color-white);
  text-align: left;
  z-index: 5;
  @media screen and (max-width: 975px) {
    font-size: var(--font-size-8xl);
    line-height: 1.938rem;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 1.438rem;
  }
`;
const EDescubraUma = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
  font-weight: 500;
  font-family: var(--font-mulish);
  white-space: pre-wrap;
`;
const Otimizar = styled.span`
  font-weight: 800;
  font-family: var(--font-mulish);
`;
const SeuTrabalhoCom = styled.span`
  font-weight: 500;
  font-family: var(--font-mulish);
`;
const OtimizarSeuTrabalhoComNoss = styled.p`
  margin-block-start: 0;
  margin-block-end: 20px;
`;
const Plataforma = styled.p`
  margin: 0;
  font-weight: 500;
  font-family: var(--font-mulish);
`;
const EDescubraUmaContainer = styled.h2`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 0.875rem;
  color: var(--color-white);
  text-align: left;
  display: inline-block;
  max-width: 100%;
  z-index: 5;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 0.688rem;
  }
`;
const SidebarDescription = styled.div`
  width: 20.813rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0rem var(--padding-12xs);
  box-sizing: border-box;
  max-width: 100%;
`;
const SidebarContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-96xl);
  max-width: 100%;
`;
const Grantosegurosimage21Icon = styled.img`
  height: 10.75rem;
  width: 13.188rem;
  position: relative;
  object-fit: cover;
  z-index: 5;
`;
const Grantosegurosimage21Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0rem 0rem 0rem var(--padding-11xs);
`;
const SubmitButtonWrapper = styled.div`
  width: 32.112rem;
  margin: 0 !important;
  position: absolute;
  top: -0.075rem;
  left: -28.169rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-56xl-2) var(--padding-86xl) var(--padding-12xs-4)
    var(--padding-19xl);
  box-sizing: border-box;
  gap: var(--gap-41xl);
`;
const InterfaceLoginRoot = styled.form`
  margin: 0;
  width: 27.619rem;
  border-radius: var(--br-28xl);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xl) var(--padding-19xl) var(--padding-21xl-5);
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  z-index: 3;
  @media screen and (max-width: 725px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-7xl);
    box-sizing: border-box;
  }
`;

const interfaceCadastro: FunctionComponent<interfaceCadastroType> = ({
  className = "",
}) => {
  const [Getname, setName] = useState("");
  const [Getemail, setEmail] = useState("");
  const [Getphone, setPhone] = useState("");
  const [Getpassword, setPassword] = useState("");
  const navigate = useNavigate();

  const onBotoIniciarSessoClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const user = { name: Getname, email: Getemail, phone: Getphone, password: Getpassword };
    console.log(user);

    try {
      const response = await fetch('https://grantosegurosapimanagement-production.up.railway.app/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
        mode: 'no-cors',
      });
      
      console.log(response);

      if (response.status === 200) {
        navigate("/pgina-login");
      } else {
        alert('Erro no cadastro, tente novamente 😬');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro no cadastro, tente novamente 😬');
    }
  }, [Getname, Getemail, Getphone, Getpassword, navigate]);

  return (
    <InterfaceLoginRoot className={className}>
      <InterfaceLoginChild />
      <InterfaceLoginInner>
        <FrameParent>
          <CriarContaWrapper>
            <CriarConta>Criar Conta</CriarConta>
          </CriarContaWrapper>
          <PreenchaOsCampos>
            Preencha os campos abaixo para criar sua conta
          </PreenchaOsCampos>
        </FrameParent>
      </InterfaceLoginInner>
      <InputContainersWrapper>
        <InputContainers>
          <InputsRow>
            <Nome>Nome</Nome>
            <InputValues>
              <InputValuesChild />
              <UrsulaGrantoSeguros
                placeholder="Ursula Granto Seguros "
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </InputValues>
          </InputsRow>
          <InputsRow>
            <Nome>Telefone</Nome>
            <InputValues>
              <InputValuesChild />
              <UrsulaGrantoSeguros
                placeholder="2799998888"
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputValues>
          </InputsRow>
          <InputsRow>
            <Nome>E-mail</Nome>
            <RectangleParent>
              <InputValuesChild />
              <Emailexemplocom
                placeholder="email@exemplo.com"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </RectangleParent>
          </InputsRow>
          <SenhaParent>
            <Nome>Senha</Nome>
            <RectangleParent>
              <InputValuesChild />
              <UrsulaGrantoSeguros
                placeholder="************"
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </RectangleParent>
          </SenhaParent>
        </InputContainers>
      </InputContainersWrapper>
      <BotoIniciarSessoWrapper>
        <BotoIniciarSesso onClick={onBotoIniciarSessoClick}>
          <Continuar>CONTINUAR</Continuar>
        </BotoIniciarSesso>
      </BotoIniciarSessoWrapper>
      <FrameGroup>
        <VectorWrapper>
          <FrameItem loading="lazy" alt="" src="/vector-6.svg" />
        </VectorWrapper>
        <Ou>{`OU `}</Ou>
        <GetAnInterventionWrapper>
          <GetAnIntervention loading="lazy" alt="" src="/vector-5.svg" />
        </GetAnInterventionWrapper>
      </FrameGroup>
      <CriarContaContainer>
        <CriarConta1>
          <EntreEmUmaContainer1>
            <EntreEmUmaContainer>
              <EntreEmUma>Entre em uma conta existente</EntreEmUma>
              <DaGrantoSeguros>
                <Da>{`da `}</Da>
                <GrantoSeguros>Granto Seguros</GrantoSeguros>
              </DaGrantoSeguros>
            </EntreEmUmaContainer>
          </EntreEmUmaContainer1>
        </CriarConta1>
      </CriarContaContainer>
      <SubmitButtonWrapper>
        <LateralLogin />
        <SidebarContent>
          <CrieSuaConta>Crie sua conta,</CrieSuaConta>
          <SidebarDescription>
            <EDescubraUmaContainer>
              <EDescubraUma>{`E descubra uma nova abordagem para   `}</EDescubraUma>
              <OtimizarSeuTrabalhoComNoss>
                <Otimizar>otimizar</Otimizar>
                <SeuTrabalhoCom>{` seu trabalho com nossa `}</SeuTrabalhoCom>
              </OtimizarSeuTrabalhoComNoss>
              <Plataforma>plataforma!</Plataforma>
            </EDescubraUmaContainer>
          </SidebarDescription>
        </SidebarContent>
        <Grantosegurosimage21Wrapper>
          <Grantosegurosimage21Icon
            loading="lazy"
            alt=""
            src="/grantosegurosimage2-1@2x.png"
          />
        </Grantosegurosimage21Wrapper>
      </SubmitButtonWrapper>
    </InterfaceLoginRoot>
  );
};

export default interfaceCadastro;
