import Image from 'next/image'
import stream from '../../../styles/pages/stream.module.css'

export default function Stream() {
  return (
    <div className={stream.stream_container}>
      <div className={stream.left_img_div}>
        <Image src="/img/stream/1.png" width={102} height={102} alt="circle" />
        <Image src="/img/stream/2.png" width={550} height={400} alt="circle" />
        <Image src="/img/stream/3.png" width={91} height={91} alt="circle" />
      </div>
      <div className={stream.right_text_div}>
        <h2>Stream your music</h2>
        <p>What if you could have a team of highly skilled artificial intelligent music composers at your disposal to write a smash hit song?</p> 
        <p>Upload your song idea ,pick any voice in our catalog and let a professional perform your next hit.</p>
        <div className={stream.right_text_div_btn}>
          <button>Learn more</button>
          <button>Try Now</button>
        </div>
      </div>
    </div>
  )
}