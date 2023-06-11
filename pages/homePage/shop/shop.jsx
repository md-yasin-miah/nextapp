import styles from '../../../styles/pages/styles.module.css'
import Image from 'next/image'

export default function Shop() {
  return (
    <div className={styles.shop_container}>
      <div className={styles.shop_title}>
        <h1>Shop</h1>
        <p>Upload your song idea, pick any voice in our catalog and let a professional perform your next hit.</p>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card_wrapper}>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <Image src="/img/shop/shop3.png" width={380} height={230} alt="circle" />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_text}>
                <h2>Holly Herndon & Jlin (feat. Spawn) – Godmother</h2>
              </div>
              <div className={styles.card_footer}>
                <Image src="/img/shop/shop-profile.png" width={30} height={30} alt="circle" />
                <div className={styles.card_footer_text}>
                  <h3>John Williams</h3>
                  <span>
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <Image src="/img/shop/shop2.png" width={380} height={230} alt="circle" />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_text}>
                <h2>Holly Herndon & Jlin (feat. Spawn) – Godmother</h2>
              </div>
              <div className={styles.card_footer}>
                <Image src="/img/shop/shop-profile.png" width={30} height={30} alt="circle" />
                <div className={styles.card_footer_text}>
                  <h4>John Williams</h4>
                  <span>
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_img}>
              <Image src="/img/shop/shop1.png" width={380} height={230} alt="circle" />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_text}>
                <h2>Holly Herndon & Jlin (feat. Spawn) – Godmother</h2>
              </div>
              <div className={styles.card_footer}>
                <Image src="/img/shop/shop-profile.png" width={30} height={30} alt="circle" />
                <div className={styles.card_footer_text}>
                  <h3>John Williams</h3>
                  <span>
                    <p>Mar 23</p>
                    <p> Jazz</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.try_now}>
        <span>Try Now</span>
      </div>
    </div>
  )
}