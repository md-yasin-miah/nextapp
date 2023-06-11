'use client'
import Image from 'next/image'
import styles from '../../styles/pages/dashboard/myMusic.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { downloadMusic, fetchUserMusic, streamMusic } from '@/axios/axios';
import Mp3Player from '@/components/Mp3Player';
import { NoDataFound } from '@/components/helper';


const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector(state => state.userMusic);
  const { streamingMusic, loading } = useSelector(state => state.musicStream);
  const { downloadedMusic, error } = useSelector(state => state.musicDownload);

  const contentType = 'audio/mpeg';
  const fileName = 'music.mp3';
  function downloadAudioChunks(audioData) {
    // 1. Extract audio data by removing the ID3 tag
    const audioDataWithoutID3 = audioData.substring(10);

    // 2. Convert data to the desired format if needed

    // 3. Create a downloadable Blob
    const blob = new Blob([audioDataWithoutID3], { type: 'audio/mpeg' });

    // 4. Generate a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'audio.mp3';

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (id) => {
    dispatch(downloadMusic(id));
  }

  useEffect(() => {
    dispatch(fetchUserMusic());
  }, [])
  return (
    <div className='dashboard_children'>
      <div className={styles.musicCards}>
        {
          music?.map((item, index) => (
            <div key={index} className={styles.musicCard}>
              <div className={styles.musicCardImg}>
                <Image className={styles.songPoster} src='/img/poster.png' width={226} height={230} alt='songPoster' />
                <Image className={styles.playBtn} src='/svg/play.svg' width={53.33} height={53.33} alt='playButton' />
                <div className={styles.share}>
                  <Image src='/svg/share.svg' width={16} height={16} alt='share' />
                </div>
              </div>
              <div className={styles.musicCardContent}>
                <div className={styles.info}>
                  <small>{item?.genre}</small>
                  <h4 onClick={() => handleDownloadClick(item?._id)}>{item?.title}</h4>
                  <span>Duration : {item?.duration}m</span>
                </div>
                {/* <button disabled={loading} onClick={() => handleStream(item?._id)}>Stream</button> */}
                <button disabled={loading} onClick={() => handleDownload(item?._id)}>Download</button>
              </div>
            </div>
          ))
        }
      </div>
      {
        music?.length <= 0 && <NoDataFound />
      }
    </div>
  )
}

export default MyMusic