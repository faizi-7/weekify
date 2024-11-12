import styles from './Button.module.css'
export default function Button({children, onClick, size= 'md', variant='primary', disabled = false, icon} : any) {
  return <button
    className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
    onClick={onClick}
  >
    {children}
    {icon && <span className={styles.icon}>{icon}</span>}
  </button>
}