import heroStyle from '../../../styles/pages/hero-section.module.css'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className={heroStyle.heroSection}>
      <div className={heroStyle.heroSection__container}>
        <div className={heroStyle.heroSection__container__text}>
          <h1>The one tool you need to <span>make</span> any demo</h1>
          <p>Upload your song idea, pick a voice and let our AI turn it into a hit</p>
          <span>
            <Image src="/img/hero/Frame-6.png" alt="arrow" width={147} height={48}/>
          </span>
        </div>
        <div className={heroStyle.heroSection__container__image}>
          <Image src="/img/hero/hero-one.png" alt="hero-section" width={280} height={400}/>
          <Image src="/img/hero/hero-two.png" alt="hero-section" width={260} height={320}/>
        </div>
      </div>
    </div>
  )
}