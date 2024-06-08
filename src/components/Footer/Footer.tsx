import styles from './Footer.module.sass';
import logo from '../../assets/images/footerLogo.png';
import Container from '../Container/Container';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrap}>
          <div className={styles.footer__contacts + ' ' + styles.contacts}>
            <div className={styles.contacts__logo}>
              <img src={logo} alt="" />
            </div>

            <ul className={styles.contacts__list}>
              <li className={styles.contacts__item}>
                <a className={styles.contacts__link_phone} href="/">
                  +7 (495) 984 25 13
                </a>
              </li>

              <li className={styles.contacts__item}>
                <a className={styles.contacts__link_email} href="/">
                  info@neoflex.ru
                </a>
              </li>
            </ul>
          </div>

          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                About bank
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Ask a Question
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Quality of service
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Requisites
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Press center
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Bank career
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Investors
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Analytics
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Business and processes
              </a>
            </li>

            <li className={styles.footer__item}>
              <a className={styles.footer__link} href="/">
                Compliance and business ethics
              </a>
            </li>
          </ul>

          <div className={styles.footer__cookies}>
            We use cookies to personalize our services and improve the user experience of our website. Cookies are small files containing information about previous visits to a website. If you do not want to use cookies, please change your browser settings
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;
