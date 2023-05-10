import Image from 'next/image'
import styles from './../styles/page.module.css'
import HomePage from '@/pages/homePage/homePage'

export default function Home() {
  return (
    <div className={styles.hello}>
      <HomePage />
    </div>
  )
}
