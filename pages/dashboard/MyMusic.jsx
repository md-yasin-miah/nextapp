'use client';
import Image from 'next/image';
import m from '../../styles/pages/dashboard/myMusic.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { downloadMusic, fetchUserMusic, streamMusic } from '@/axios/axios';
import { NoDataFound } from '@/components/helper';

const MyMusic = () => {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.userMusic);
  const { streamingMusic, loading } = useSelector((state) => state.musicStream);
  const { downloadedMusic, error } = useSelector(
    (state) => state.musicDownload
  );
  console.log('downloadedMusic', downloadedMusic, error);

  const handleDownloadClick = () => {
    downloadAudioChunks(downloadedMusic);
  };

  const handleDownload = (music) => {
    dispatch(downloadMusic(music));
  };

  useEffect(() => {
    dispatch(fetchUserMusic());
  }, []);

  return (
    <div className='dashboard_children'>
      <div className={m.musicCards}>
        {music?.map((item, index) => (
          <div key={index} className={m.musicCard}>
            <div className={m.musicCardImg}>
              <Image
                className={m.songPoster}
                src='/img/poster.png'
                width={226}
                height={230}
                alt='songPoster'
              />
              <Image
                className={m.playBtn}
                src='/svg/play.svg'
                width={53.33}
                height={53.33}
                alt='playButton'
              />
              <div className={m.share}>
                <Image
                  src='/svg/share.svg'
                  width={16}
                  height={16}
                  alt='share'
                />
              </div>
            </div>
            <div className={m.musicCardContent}>
              <div className={m.info}>
                <small>{item?.genre}</small>
                <h4 onClick={() => handleDownloadClick(item?._id)}>
                  {item?.title}
                </h4>
                <span>Duration : {item?.duration}m</span>
              </div>
              {/* <button disabled={loading} onClick={() => handleStream(item?._id)}>Stream</button> */}
              <button disabled={loading} onClick={() => handleDownload(item)}>
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
      {music?.length <= 0 && <NoDataFound />}
    </div>
  );
};

export default MyMusic;
