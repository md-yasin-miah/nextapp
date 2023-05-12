import shop from '../../../styles/pages/shop.module.css'
import Image from 'next/image'

export default function Shop() {
  return (
    <div className={shop.shop_container}>
      <div className={shop.shop_title}>
        <h1>Shop</h1>
        <p>Upload your song idea, pick any voice in our catalog and let a professional perform your next hit.</p>
      </div>
      <div className={shop.card_container}>
        <div className={shop.card_wrapper}>
          <div className={shop.card}>
            <div className={shop.card_img}>
              <Image src="/img/shop/shop1.png" width={380} height={230} alt="circle" />
            </div>
            <div className={shop.card_text}>
              <h2>Holly Herndon & Jlin (feat. Spawn) – Godmother</h2>
            </div>
            <div className={shop.card_footer}>
              <Image src="/img/shop/shop-profile.png" width={30} height={30} alt="circle" />
              <div className={shop.card_footer_text}>
                <h3>John Williams</h3>
                <span>
                  <p>Mar 23</p>
                  <li> Jazz</li>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={shop.try_now}>
        <button>Try Now</button>
      </div>
    </div>
  )
}