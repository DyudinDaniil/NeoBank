import React from 'react';
import styles from './Menu.module.sass';

interface MenuProps {
  menuActive: boolean;
}

const Menu: React.FC<MenuProps> = ({ menuActive }) => {

  const classOfMenu = menuActive ? styles.active : '';

  return (
        <div className={styles.menu + ' ' + classOfMenu}>
          <div className={styles.menu__blur}></div>

          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Credit card
              </a>
            </li>

            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Product 
              </a>
            </li>

            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Account
              </a>
            </li>

            <li className={styles.menu__item}>
              <a className={styles.menu__link} href="/">
                Resources
              </a>
            </li>
          </ul>
        </div>
       
  );
}

export default Menu;
