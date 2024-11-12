import styles from './Footer.module.css'
import logo from '../../assets/darkLogo.png'
export default function Footer() {
  return <div className={styles.container}>
    <img src={logo}/>
    <div>&copy; 2024 Weekify All rights reserved.</div>
  </div>
}