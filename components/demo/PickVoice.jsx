import React from 'react'
import p from '../../styles/pages/demo.module.css'
import Image from 'next/image'
const PickVoice = () => {
  return (
    <div className={p.pickVoice}>
      <h4>Pick a voice</h4>
      <div className={p.p_v_cards}>
        <div className={p.p_v_card}>
          <div className={p.imgArea}></div>
          <div className={p.contentArea}>
            <div className={p.p_v_titleArea}>
              <h3>Kanyea Singer</h3>
              <div className={p.rating}>
                <Image src='/img/rating.png' width={18} height={18} alt='star' />
                <span>4.5</span>
              </div>
            </div>
            <div className={p.tag}>Rapper West</div>
            <div className={p.p_v_btn}>
              <button>Try now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PickVoice