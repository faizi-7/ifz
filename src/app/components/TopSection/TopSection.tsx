import Image from 'next/image'
import styles from './TopSection.module.css'

export default function TopSection() {
  return (
    <div className={styles.container}>
      <div className={styles.left }>
        <div className={styles.imageWrapper}>
          <Image
            src="/HeroImg.png"
            alt="image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.heading}>
          <div className={styles.headChild1}>✋ Hello.</div>
          <div className={styles.headChild2}>I'm <b>Faiz Iqbal</b></div>
          <div className={styles.headChild3}>Dedicated to tackling diverse challenges and creating impactful solutions.</div>
        </div>
      </div>
    </div>
  )
}