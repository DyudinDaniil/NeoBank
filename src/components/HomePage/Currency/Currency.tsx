import Container from '../../Container/Container';
import styles from './Currency.module.sass';
import bank from '../../../assets/images/bank.png';

const Currency = () => {
  return (
    <section className={styles.currency}>
      <Container>
        <div className={styles.currency__wrap}>
          <div className={styles.currency__info}>
            <h2 className={styles.currency__title}>
              Exchange rate in internet bank
            </h2>

            <div className={styles.currency__text}>
              Currency
            </div>

            <ul className={styles.currency__list}>
              <li className={styles.currency__item}>
                <span className={styles.currency__name}>USD:</span>
                <span className={styles.currency__num}>60.78</span>
              </li>

              <li className={styles.currency__item}>
                <span className={styles.currency__name}>CNY:</span>
                <span className={styles.currency__num}>9.08</span>
              </li>

              <li className={styles.currency__item}>
                <span className={styles.currency__name}>CHF:</span>
                <span className={styles.currency__num}>64.78</span>
              </li>

              <li className={styles.currency__item}>
                <span className={styles.currency__name}>USD:</span>
                <span className={styles.currency__num}>60.78</span>
              </li>

              <li className={styles.currency__item}>
                <span className={styles.currency__name}>JPY:</span>
                <span className={styles.currency__num}>0.46</span>
              </li>

              <li className={styles.currency__item}>
                <span className={styles.currency__name}>TRY:</span>
                <span className={styles.currency__num}>3.39</span>
              </li>
            </ul>

            <a className={styles.currency__link} href="/">
              All courses
            </a>
          </div>

          <div className={styles.currency__update}>
            <p className={styles.currency__date}>Update every 15 minutes, MSC 09.08.2022</p>
            <div className={styles.currency__bank}>
              <img src={bank} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Currency;