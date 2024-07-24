import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../Styles/Home.module.css';
import Headerbar from "../../components/Headerbar";

function MainPage() {
    return (
        <div className={styles.container}>
          <div className={styles.main_container}>
            <Headerbar />
            <div className={styles.title}>
              <h1>Simplique a análise de Contratos com IA</h1>
              <p>
                Nossa ferramenta transforma a maneira como você examina, organiza e
                utiliza informações contratuais.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <img src="/taca.svg" width={50} height={50} alt="Taça" />
                <div>
                  <h4>Tipos de Contratos</h4>
                  <p>
                    Treinamentos com{" "}
                    <span className={styles.highlight}>diferentes modelos</span> de
                    contratos.
                  </p>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/taca.svg" width={50} height={50} alt="Taça" />
                <div>
                  <h4>Treinamento da AI</h4>
                  <p>
                    Inteligência Treinada com mais de +
                    <span className={styles.highlight}>100.000</span> contratos
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cta_btn}>
              <a href={"/register"}>
                <button>Iniciar Sessão</button>
              </a>
            </div>
          </div>
        </div>
      );
}

export default MainPage;
