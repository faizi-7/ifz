'use client'
import { useTheme } from 'next-themes'
import styles from './Themes.module.css'


export default function Themes() {
  const { theme, setTheme } = useTheme()
  return <div className={styles.container}>
    <div className={styles.flags}>

      <div className={styles.icon} onClick={() => setTheme('india')}><img src='/india.png'/></div>
      <div className={styles.icon} onClick={() => setTheme('pakistan')}><img src='/pakistan.png'/></div>
      <div className={styles.icon} onClick={() => setTheme('united-states')}><img src='/united-states.png'/></div>
      <div className={styles.icon} onClick={() => setTheme('china')}><img src='/china.png'/></div>
      <div className={styles.icon} onClick={() => setTheme('ukraine')}><img src='/ukraine.png'/></div>
      <div className={styles.icon} onClick={() => setTheme('palestine')}><img src='/palestine.png'/></div>
    </div>
  </div>
}