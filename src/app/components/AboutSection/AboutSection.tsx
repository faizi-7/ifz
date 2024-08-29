import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>About Me.</div>
      <div className={styles.content}>
        <div className={styles.child1}>
          <div className={styles.childHeading}>
            <div className={styles.childn1}>personal</div>
            <div className={styles.appleDots}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <div className={styles.childContent}>
            After crossing 18 i have delve into many topics and philosophical concepts,
            i am continuing my journey as an engineer
          </div>
        </div>
        <div className={styles.child2}>
          <div className={styles.childHeading}>
            <div className={styles.childn1}>professional</div>
            <div className={styles.appleDots}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
          <div className={styles.childContent}>
            I was born in Varanasi, India and graduated with a Bachelors in
            Electronics & Communication Engineering , from the Jamia Millia
            Islamia, New Delhi at New Delhi this year. Since graduating I have
            had freelance experience building functional web applications with
            cutting edge technologies. In my "free time" I continue to build
            applications that solve problems I encounter frequently, always
            trying to implement new technologies.
          </div>
        </div>
      </div>
    </div>
  );
}
