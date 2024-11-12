import Button from "../ui/Button/Button";
import styles from './Navbar.module.css'
import logo from '../../assets/defaultLogo.png'

export default function Navbar() {
  return <div className={styles.container}>
    <div className={styles.logo}>
      <img src={logo}/>
      <span>
        Weekify
      </span>
    </div>
    <Button>Login/Register</Button>
  </div>
}