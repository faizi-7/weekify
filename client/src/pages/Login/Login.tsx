import styles from './Login.module.css'
import logo from '../../assets/defaultLogo.png'
import AuthCard from '../../components/ui/AuthCard/AuthCard'
import Button from '../../components/ui/Button/Button'
import googleIcon from "../../assets/googleIcon.svg"

export default function Login() {
  return <div className={styles.container}>
    <AuthCard/>
    <div className={styles.main}>
      <div className={styles.top}>
        <img src={logo}/>
        <div className={styles.heading}>Login</div>
      </div>
      <Button icon={<img src={googleIcon}/>}>Login with Google</Button>
      <div className={styles.divider}>
        or
</div>

      <div className={styles.form}>

      <input type='text' placeholder='Enter your email'/>
      <input type='password' placeholder='Enter your password'/>
      <Button>Login</Button>
      </div>
    </div>
  </div>
}