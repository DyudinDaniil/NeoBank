import Container from '../Container/Container';
import styles from './Navbar.module.sass';

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__wrap}>
          <h1 className={styles.nav__title}>
            <a href="/">
              NeoBank
            </a>
          </h1>

          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/">
                Credit card
              </a>
            </li>

            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/">
                Product 
              </a>
            </li>

            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/">
                Account
              </a>
            </li>

            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/">
                Resources
              </a>
            </li>
          </ul>

          <button className={styles.nav__button}>Online Bank</button>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar;
