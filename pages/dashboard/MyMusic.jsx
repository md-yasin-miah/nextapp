import Image from 'next/image'
import m from '../../styles/pages/dashboard/myMusic.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { downloadMusic, fetchUserMusic, streamMusic } from '@/axios/axios';
import Mp3Player from '@/components/Mp3Player';

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector(state => state.userMusic);
  const { streamingMusic, loading } = useSelector(state => state.musicStream);
  const { downloadedMusic, error } = useSelector(state => state.musicDownload);
  console.log('downloadedMusic', downloadedMusic, error);



  const fileName = "audio.mp3";

  const downloadMP3 = (base64Data, fileName) => {
    const link = document.createElement('a');
    link.href = `data:audio/mp3;base64,${base64Data}`;
    link.download = fileName;
    link.click();
  };

  const handleDownloadClick = () => {
    if (downloadedMusic) {
      downloadMP3(downloadedMusic, fileName);
    }
  };

  const handleDownload = (id) => {
    dispatch(downloadMusic(id));
  }

  useEffect(() => {
    dispatch(fetchUserMusic());
  }, [])
  console.log('music stream', music)
  // console.log('streamingMusic', streamingMusic)
  return (
    <div className='dashboard_children'>
      <div className={m.musicCards}>
        {
          music?.map((item, index) => (
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
                  <small>{item?.genre}</small>
                  <h4 onClick={() => handleDownloadClick()}>{item?.title}</h4>
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
        music?.length <= 0 && <div style={{ display: 'flex', justifyContent: 'center' }}><Image src='/img/no__data.png' width={300} height={300} alt='empty' /></div>
      }
    </div>
  )
}

export default MyMusic