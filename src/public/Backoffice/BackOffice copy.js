import { useCallback } from "react";
import "./BackOffice.css";

const BackOffice = () => {
  const onMenuLogoClick = useCallback(() => {
    // Please sync "Pagina Inicial" to the project
  }, []);

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
        >
          <div className="b-enviar-arquivo-child" />
          <div className="enviar-arquivo"> Enviar Arquivo</div>
          <b className="b">+</b>
        </button>
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
        <div className="seja-bem-vindoa-container">
          <p className="seja-bem-vindoa-ao-seu-port">
            <span className="blank-line">&nbsp;</span>
            <span>{`Seja bem vindo(a), ao seu portal de análise de contratos
`}</span>
          </p>
          <p className="arraste-seus-arquivos">{`Arraste seus arquivos e pastas para cá ou use o botão "Enviar arquivo"
 para fazer upload e começar a analisar.`}</p>
        </div>
        <button className="document" autoFocus={true} id="uploadClick">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
          <img className="vector-icon4" alt="" src="/vector4.svg" />
        </button>
      </div>
    </div>
  );
};

export default BackOffice;
