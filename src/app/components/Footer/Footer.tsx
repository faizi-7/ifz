import styles from "./Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/faizi-7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconWrapper}
          >
            <GitHubIcon className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/ifaiz7/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconWrapper}
          >
            <LinkedInIcon className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/faiz_iqbal7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconWrapper}
          >
            <InstagramIcon className={styles.icon} />
          </a>
          <a
            href="https://x.com/ifaiz710"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconWrapper}
          >
            <TwitterIcon className={styles.icon} />
          </a>
        </div>
        <div className={styles.copy}>
          &copy; 2024 Faiz Iqbal. Made with ❤️ by me.
        </div>
      </div>
    </div>
  );
}
