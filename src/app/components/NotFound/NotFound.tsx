import styles from './NotFound.module.css';
import { useRouter } from 'next/navigation';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export const NotFound= () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <RestaurantIcon fontSize="large" />
      </div>
      <div className={styles.message}>
        <div>This page is cooking...</div>
        <div>Will be available soon!</div>
      </div>
      <div className={styles.timer}>
        <TimerIcon fontSize="large" />
      </div>
      <button onClick={() => router.push('/')} className={styles.homeButton}>
        <EmojiEmotionsIcon className={styles.emoji} />
        Take me home!
      </button>
    </div>
  );
};

