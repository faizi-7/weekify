import styles from "./AuthCard.module.css";
import logo from '../../../assets/defaultLogo.png'
import blurLogo from '../../../assets/lightLogo.png'
export default function AuthCard() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.mainLogo} />
      <div>
        <div className={styles.textLogo}>Weekify</div>
        <div className={styles.subTextLogo}>
          Organise your life one week at a time
        </div>
      </div>
      <img src={blurLogo} className={styles.blurLogo} />
    </div>
  );
}
