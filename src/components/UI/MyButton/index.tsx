import styles from './style.module.scss';
const MyButton = () => {
  return (
    <div className={styles.myButton}>
      <span className={styles.myButton_text}>Text button</span>
      <span className={styles.myButton_bg}></span>
    </div>
  );
};
export default MyButton;
