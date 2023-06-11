"use client"
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/pages/demo.module.css';
import MainLayout from '@/components/layouts/MainLayout';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import LoadingProgressModal from '@/components/LoadingProgressModal';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { convertMusic, getAllVoices } from '@/axios/axios';

const MakeDemo = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [audioData, setAudioData] = useState({
    voice: '',
    artist: ''
  });
  const [openProgress, setOpenProgress] = useState(false);
  const { voices } = useSelector((state) => state.voice);
  const { convertedMusic } = useSelector((state) => state.musicConversion);
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
  useEffect(() => {
    if (audioData.voice !== '') {
      setStep2(true);
      dispatch(getAllVoices());
    }
  }, [audioData]);
  const fileInputRef = useRef(null);
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mpeg') {
      setAudioData({
        ...audioData,
        voice: file
      });
    } else {
      toast.error('Please upload audio file');
    }
  };
  const selectArtist = (artistId) => {
    setAudioData({
      ...audioData,
      artist: artistId
    });
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };
  const handleConvertMusic = () => {
    if (audioData.artist === '') {
      toast.error('Please select artist');
    } else {
      setOpenProgress(true);
      dispatch(convertMusic(audioData));
    }
  };


  return (
    <MainLayout>
      <div className={styles.demo}>
        <div className="pageTitle">
          <h1>Make a demo</h1>
          <p>Choose Your Favorite Artist Voice to make your song</p>
        </div>
        <div className={styles.progress}>
          <div className={`${styles.target} ${styles.active}`} onClick={() => { setStep2(false); setStep3(false) }}>
            <span>01</span>
            <div className={styles.circle} ></div>
          </div>
          <div className={`${styles.target} ${step2 ? styles.active : ''}`} onClick={() => setStep3(false)}>
            <span>02</span>
            <div className={styles.circle}></div>
          </div>
          <div className={`${styles.target} ${step3 ? styles.active : ''}`}>
            <span>03</span>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.line}>
            <div className={styles.line1 + ' ' + (step2 ? styles.solid : '')}></div>
            <div className={styles.line1 + ' ' + (step3 ? styles.solid : '')}></div>
          </div>
        </div>
        {
          step2 && !step3 ?
            <div className={styles.pickVoice}>
              <h4>Pick a voice</h4>
              <div className={styles.p_v_cards}>
                {
                  voices?.map((v, i) => (
                    <div key={i} className={styles.p_v_card}
                    >
                      <div className={styles.imgArea} onClick={() => { selectArtist(v?._id); setStep3(true) }}>
                        <Image className={styles.asBG} src={v?.artistImage} width={380} height={296} alt='' />
                        <Image className={styles.checkIcon} src='/img/check.png' width={80} height={80} alt='' />
                        <div className={styles.tag}><p>{v?.genre}</p></div>
                      </div>
                      <div className={styles.contentArea}>
                        <div className={styles.p_v_titleArea}>
                          <h3>{v?.name}</h3>
                          <div className={styles.rating}>
                            <Image src='/img/rating.png' width={18} height={18} alt='star' />
                            <span>{v?.ratings}</span>
                          </div>
                        </div>
                        <div className={styles.category}>{v?.code}</div>
                        <div className={styles.p_v_btn}>
                          <button onClick={() => { selectArtist(v?._id); setStep3(true) }}>Try now</button>
                        </div>
                      </div>
                      {/* conditional if premium */}
                      {i >= 4 &&
                        <div className={styles.premium}
                          // redirect to subscribe page
                          onClick={() => router.push('/subscriptionPlan')}
                        >
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
              && <div className={styles.upload}>
                <h4>Upload Your Recording</h4>
                <label htmlFor="uploadAudio" onClick={handleLabelClick}>
                  <button>
                    <Image src="/img/plus.png" width={50} height={50} alt='plus' />
                  </button>
                </label>
                <input
                  encType="multipart/form-data"
                  type="file"
                  id="uploadAudio"
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                  onChange={handleAudioUpload}
                  accept="audio/mpeg"
                />
              </div>
            )
        }
        {
          step2 && step3 &&
          <div className={styles.getDemoBtn}>
            <button
              onClick={handleConvertMusic}
            >Get your demo</button>
          </div>
        }
        <div className={styles.latestDemo}>
          <h4>Latest Demo</h4>
          <div className={styles.latestDemo__content}>
            <Splide options={options}>
              {
                ['1', '2', '3', '4'].map((demo, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className={styles.demoCard}>
                        <div className={styles.demoCard__img}>
                          <Image src='/img/demo01.png' width={295} height={363} alt='' />
                        </div>
                        <Image className={styles.playBtn} src='/svg/play.svg' width={64} height={64} alt='' />
                      </div>
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
            setOpen={setOpenProgress} />
        }
      </div>
    </MainLayout>
  )
}

export default MakeDemo