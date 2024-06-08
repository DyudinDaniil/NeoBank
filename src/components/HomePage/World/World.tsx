import Container from '../../Container/Container';
// import Title from '../../Title/Title';
import styles from './World.module.sass';
import map from '../../../assets/images/map.png';

const World = () => {
  return (
    <section className={styles.world}>
      <Container>
        <div className={styles.world__wrap}>
          <h2 className={styles.world__title}>
            Current news from the world of finance
          </h2>

          <p className={styles.world__text}>
            Withdraw and transfer money online through our application
          </p>

          <div className={styles.world__map}>
            <img src={map} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default World;