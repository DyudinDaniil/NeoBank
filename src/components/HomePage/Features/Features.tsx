import styles from './Features.module.sass';
import Container from '../../Container/Container';
import featuresImg from '../../../assets/images/features.png';
import check from '../../../assets/images/check-circle.svg';

const Features = () => {
  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.features__wrap}>
          <div className={styles.features__image}>
            <img src={featuresImg} alt="" />
          </div>

          <div className={styles.features__info}>
            <h2 className={styles.features__title}>
              We Provide Many Features You Can Use
            </h2>

            <p className={styles.features__text}>
              You can explore the features that we provide with fun and have their own functions each feature
            </p>

            <ul className={styles.features__list}>
              <li className={styles.features__item}>
                <img src={check} alt="" />
                <span>Powerfull online protection.</span>
              </li>

              <li className={styles.features__item}>
                <img src={check} alt="" />
                <span>Cashback without borders.</span>
              </li>

              <li className={styles.features__item}>
                <img src={check} alt="" />
                <span>Personal design</span>
              </li>

              <li className={styles.features__item}>
                <img src={check} alt="" />
                <span>Work anywhere in the world.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;