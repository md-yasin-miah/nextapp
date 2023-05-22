import Image from 'next/image'
import m from '../../styles/pages/dashboard/myMusic.module.css'

const MyMusic = () => {
  return (
    <div className='dashboard_children'>
      <div className={m.musicCards}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div key={index} className={m.musicCard}>
              <div className={m.musicCardImg}>
                <Image className={m.songPoster} src='/img/poster.png' width={226} height={230} alt='songPoster' />
                <Image className={m.playBtn} src='/svg/play.svg' width={53.33} height={53.33} alt='playButton' />
                <div className={m.share}>
                  <Image src='/svg/share.svg' width={16} height={16} alt='share' />
                </div>
              </div>
              <div className={m.musicCardContent}>
                <div className={m.info}>
                  <small>Jazz</small>
                  <h4>Lost in Desert</h4>
                  <span>Duration : 3min 20s</span>
                </div>
                <button>Stream</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyMusic