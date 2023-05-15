import React from 'react'
import d from '../../styles/pages/demo.module.css'
import Image from 'next/image'
const PickVoice = () => {
  return (
    <div className={d.pickVoice}>
      <h4>Pick a voice</h4>
      <div className={d.p_v_cards}>
        {
          [...Array(10)].map((e, i) => (
            <div key={i} className={d.p_v_card}>
              <div className={d.imgArea}>
                <Image className={d.asBG} src='/img/voice.png' width={380} height={296} />
                <Image className={d.checkIcon} src='/img/check.png' width={80} height={80} />
                <div className={d.tag}><p>Jass</p></div>
              </div>
              <div className={d.contentArea}>
                <div className={d.p_v_titleArea}>
                  <h3>Kanyea Singer</h3>
                  <div className={d.rating}>
                    <Image src='/img/rating.png' width={18} height={18} alt='star' />
                    <span>4.5</span>
                  </div>
                </div>
                <div className={d.category}>Rapper West</div>
                <div className={d.p_v_btn}>
                  <button>Try now</button>
                </div>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default PickVoice