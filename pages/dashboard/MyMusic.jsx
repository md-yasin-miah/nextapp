import Image from 'next/image'
import m from '../../styles/pages/dashboard/myMusic.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchUserMusic, streamMusic } from '@/axios/axios';
import Mp3Player from '@/components/Mp3Player';

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector(state => state.userMusic);
  const { streamingMusic, loading } = useSelector(state => state.musicStream);

  const handleStream = (id) => {
    dispatch(streamMusic(id));
    if (streamingMusic) {
      <Mp3Player encodedAudio={streamingMusic} />
      // // Convert the encoded audio data to an ArrayBuffer
      // const encodedAudioData = atob(streamingMusic);
      // const arrayBuffer = new ArrayBuffer(encodedAudioData.length);
      // const view = new Uint8Array(arrayBuffer);
      // for (let i = 0; i < encodedAudioData.length; i++) {
      //   view[i] = encodedAudioData.charCodeAt(i) & 0xff;
      // }

      // // Create an AudioContext instance
      // const audioContext = new (window.AudioContext || window.webkitAudioContext)();

      // // Decode the audio data
      // audioContext.decodeAudioData(arrayBuffer, function (decodedData) {
      //   // Create a buffer source node
      //   const source = audioContext.createBufferSource();
      //   // Set the decoded audio data as the buffer for the source node
      //   source.buffer = decodedData;
      //   // Connect the source node to the audio context destination (e.g., speakers)
      //   source.connect(audioContext.destination);
      //   // Start playing the audio
      //   source.start(0);
      //   console.log('Error decoding audio:');
      // }, function (error) {
      //   // Error handling if decoding fails
      //   console.error('Error decoding audio:', error);
      // });
    }
  }


  useEffect(() => {
    dispatch(fetchUserMusic());
  }, [])
  console.log('mmmmmmmmmm', music)
  console.log('streamingMusic', streamingMusic)
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
                  <h4>{item?.title}</h4>
                  <span>Duration : {item?.duration}m</span>
                </div>
                <button disabled={loading} onClick={() => handleStream(item?._id)}>Stream</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyMusic