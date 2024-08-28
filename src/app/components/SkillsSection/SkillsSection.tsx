import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Toolbox.</div>
      <div className={styles.box1}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Technical Skills</h1>
        </div>
        <div className={styles.rightSection}>
          <div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              React Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Node Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Express Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Next Js
            </div>
          </div>
          <div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              HTML/CSS
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              C++/Java
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              SQL
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              AWS
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>Soft Skills</h1>
        </div>
        <div className={styles.rightSection}>
          <div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              React Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Node Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Express Js
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              Next Js
            </div>
          </div>
          <div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              HTML/CSS
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              C++/Java
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              SQL
            </div>
            <div className={styles.skillItem}>
              <div className={styles.skillDot}></div>
              AWS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
