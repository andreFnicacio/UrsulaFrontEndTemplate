import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/Headerbar.module.css';

function Headerbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="https://grantoseguros.com/">
          <picture>
            <source media="(max-width: 768px)" srcSet="/logo-g.png" />
            <img
              src="/logo.svg"
              width={90}
              height={40}
              alt="Logo"
              className={styles.logo_img}
            />
          </picture>
        </Link>
      </div>
      <nav className={styles.nav_menu}>
        <ul className={`${styles.menu_items} ${menuOpen ? styles.open : ''}`}>
          <li>
            <Link to="https://jsevitor.github.io/desafio-granto-landing-page/" target="_blank">
              Saiba Mais
            </Link>
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
        <div className={styles.cta_btn}>
          <Link to="/login">
            <button>Fazer Login</button>
          </Link>
        </div>
        <div className={styles.menu_icon}>
          {!menuOpen && (
            <img
              src="/burger-menu.svg"
              width={24}
              height={24}
              alt="Menu icon"
              onClick={toggleMenu}
            />
          )}
          {menuOpen && (
            <img
              src="/x.svg"
              width={24}
              height={24}
              alt="Menu icon"
              onClick={toggleMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Headerbar;
