import styles from './SingleBlog.module.css'
import Loader from "@/app/components/Loader/Loader";

export default function loading() {
  return <div className={styles.container}><Loader/></div>
}