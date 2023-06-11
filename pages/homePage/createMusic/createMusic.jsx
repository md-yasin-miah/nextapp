import styles from '../../../styles/pages/create-music.module.css'
import Image from 'next/image';

export default function CreateMusic() {
  return (
    <div className={styles.createMusic_container}>
      <div className={styles.createMusic_title}>
        <h1>Create Music</h1>
        <p>Upload your song idea, pick any voice in our catalog and let a professional perform your next hit.</p>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.up_image}>
              <Image src='/img/create-music/cloud.png' width={103} height={69} alt="alt" />
            </div>
          </div>
          <div className={styles.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={styles.card_content}>
            <p>Upload Song</p>
          </div>
        </div>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.up_image}>
              <Image src='/img/create-music/vibes.png' width={81} height={81} alt="alt" />
            </div>
          </div>
          <div className={styles.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={styles.card_content}>
            <p>License Voice</p>
          </div>
        </div>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.up_image}>
              <Image src='/img/create-music/music-arrow.png' width={81} height={81} alt="alt" />
            </div>
          </div>
          <div className={styles.card_border}>
            <Image src='/img/create-music/border-music.png' width={339} height={164} alt="alt" />
          </div>
          <div className={styles.card_content}>
            <p>Create Music</p>
          </div>
        </div>
      </div>
    </div >
  )
}