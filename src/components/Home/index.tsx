import styles from './style.module.scss';

const HomePage = () => {
  return (
    <div id="home" style={{ paddingTop: '100px' }}>
      <div className={styles.home__container}>
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default HomePage;
