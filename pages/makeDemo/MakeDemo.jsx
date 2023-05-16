"use client"
import { useState } from 'react';
import d from '../../styles/pages/demo.module.css';
import MainLayout from '@/components/layouts/MainLayout';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import LoadingProgressModal from '@/components/LoadingProgressModal';

const MakeDemo = () => {
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [openProgress, setOpenProgress] = useState(true);
  const options = {
    perPage: 3,
    gap: '16px',
    type: 'loop',
    perMove: 1,
    drag: true,
    pauseOnFocus: true,
    autoplay: false,
    pauseOnHover: true,
    arrows: false,
    classes: {
      prev: '',
      next: '',
    },
    pagination: false,
    autoplaySpeed: 3000,
    interval: 3000,
    width: '100%',
    height: '100%',
    breakpoints: {
      1150: {
        perPage: 2,
      },
    },
  }
  return (
    <MainLayout>
      <div className={d.demo}>
        <div className="pageTitle">
          <h1>Make a demo</h1>
          <p>Choose Your Favorite Artist Voice to make your song</p>
        </div>
        <div className={d.progress}>
          <div className={`${d.target} ${d.active}`}>
            <span>01</span>
            <div className={d.circle} ></div>
          </div>
          <div className={`${d.target} ${step2 ? d.active : ''}`}>
            <span>02</span>
            <div className={d.circle}></div>
          </div>
          <div className={`${d.target} ${step3 ? d.active : ''}`}>
            <span>03</span>
            <div className={d.circle}></div>
          </div>
          <div className={d.line}>
            <div className={d.line1 + ' ' + (step2 ? d.solid : '')}></div>
            <div className={d.line1 + ' ' + (step3 ? d.solid : '')}></div>
          </div>
        </div>
        {
          step2 && !step3 ?
            <div className={d.pickVoice}>
              <h4>Pick a voice</h4>
              <div className={d.p_v_cards}>
                {
                  [...Array(10)].map((e, i) => (
                    <div key={i} className={d.p_v_card}
                      // conditional onClick if not premium
                      onClick={() => i < 4 ? setStep3(true) : null}
                    >
                      <div className={d.imgArea}>
                        <Image className={d.asBG} src='/img/voice.png' width={380} height={296} alt='' />
                        {i === 0 &&
                          <Image className={d.checkIcon} src='/img/check.png' width={80} height={80} alt='' />
                        }
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
                      {/* conditional if premium */}
                      {i >= 4 &&
                        <div className={d.premium}>
                          <span>Get Premium</span>
                        </div>
                      }
                    </div>
                  ))
                }

              </div>
            </div>
            :
            (!step3
              && <div className={d.upload}>
                <h4>Upload Your Recording</h4>
                <button onClick={() => setStep2(true)}>
                  <Image src="/img/plus.png" width={50} height={50} alt='plus' />
                </button>
              </div>
            )
        }
        {
          step2 && step3 &&
          <div
            className={d.getDemoBtn}
            // open loading progress
            onClick={() => setOpenProgress(true)}>
            <button >Get your demo</button>
          </div>
        }
        <div className={d.latestDemo}>
          <h4>Latest Demo</h4>
          <div className={d.latestDemo__content}>
            <Splide options={options}>
              {
                ['1', '2', '3', '4'].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className={d.demoCard}></div>
                    </SplideSlide>
                  )
                })
              }
            </Splide>
          </div>
        </div>
        {
          openProgress &&
          <LoadingProgressModal
            title='AI preparing your music'
            open={openProgress}
            setOpen={setOpenProgress}
            percent={'65%'} />
        }
      </div>
    </MainLayout>
  )
}

export default MakeDemo