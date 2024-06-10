import styles from './Support.module.sass';
import Container from "../../Container/Container";
import send from '../../../assets/images/send.svg';
import email from '../../../assets/images/email.svg';

const Support = () => {

  return (
    <section className={styles.support}>
      <Container>
        <div className={styles.support__wrap}>
          <p className={styles.support__text}>
            Support
          </p>

          <h2 className={styles.support__title}>
            Subscribe Newsletter & get
          </h2>

          <p className={styles.support__news}>
            Bank News
          </p>

          <form className={styles.support__form}>
            <div className={styles.support__image_email}>
              <img src={email} alt="" />
            </div>

            <input className={styles.support__input} type="email" placeholder="Your email" />

            <button className={styles.support__button}>
              <div className={styles.support__image_send}>
                <img src={send} alt="" />
              </div>

              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );

}

export default Support;