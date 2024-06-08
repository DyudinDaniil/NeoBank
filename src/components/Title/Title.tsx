import styles from './Title.module.sass';

const Title: React.FC<string> = ({ text }) => {
  return (
    <h2 className={styles.title}>
      {text}
    </h2>
  );
}

export default Title;