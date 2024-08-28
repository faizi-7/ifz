import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.leftSide}>
        <h2>Tell me about your project!</h2>
        <a href="mailto:faiziqbal733@gmail.com">Send me an email →</a>
        <a href="tel:+916387991306">Call me →</a>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.info}>
          <h3>Currently in</h3>
          <p>Varanasi, India</p>
        </div>
        <div className={styles.info}>
          <h3>Contact</h3>
          <p>+91 6387991306</p>
          <p>faiziqbal733@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
