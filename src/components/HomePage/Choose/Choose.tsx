import Container from '../../Container/Container';
import styles from './Choose.module.sass';
import cardImage1 from '../../../assets/images/cardImage1.png';
import cardImage2 from '../../../assets/images/cardImage2.png';
import cardImage3 from '../../../assets/images/cardImage3.png';
import cardImage4 from '../../../assets/images/cardImage4.png';

const Choose = () => {
  return (
    <section className={styles.choose}>
      <Container>
        <div className={styles.choose__wrap}>
          <div className={styles.choose__info}>
            <h2 className={styles.choose__title}>
              Choose the design you like and apply for card right now
            </h2>

            <button className={styles.choose__button}>
              Choose the card
            </button>
          </div>

          <ul className={styles.choose__cards}>
            <li className={styles.choose__card}>
              <img src={cardImage1} alt="" />
            </li>

            <li className={styles.choose__card}>
              <img src={cardImage2} alt="" />
            </li>

            <li className={styles.choose__card}>
              <img src={cardImage3} alt="" />
            </li>

            <li className={styles.choose__card}>
              <img src={cardImage4} alt="" />
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Choose;