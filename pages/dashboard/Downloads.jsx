'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/pages/dashboard/downloads.module.css';
import Image from 'next/image';
import AudioPlayer from '@/components/shared/AudioPlayer';
import { useDispatch, useSelector } from 'react-redux';
import { downloadedMusicList } from '@/axios/axios';
const Downloads = () => {
  const [showOptions, setShowOptions] = useState(null);
  const dispatch = useDispatch();
  const { downloadedMusic_List } = useSelector((state) => state.musicDownload);
  useEffect(() => {
    dispatch(downloadedMusicList());
  }, []);
  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4>Listen Your Downloaded Music</h4>
      </div>
      <div className={styles.container}>
        <div className={styles.songs}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index} className={styles.song}>
                <div className={styles.song_title}>
                  <div className={styles.song_img}>
                    <Image width={48} height={48} src="/img/song.png" alt="" />
                  </div>
                  <span className={styles.songName}>A Sky Full</span>
                </div>

                <div className={styles.info}>
                  <span className={styles.category}>Bettles</span>
                  <span className={styles.time}>5:21</span>
                  <div className={styles.icons}>
                    <div className={styles.playIcon}>
                      <Image width={32} height={32} src="/svg/play.svg" alt="" />
                    </div>
                    <div className={styles.threeDotsIcon}>
                      <Image width={20} height={20} src="/svg/threeDots.svg" alt="" onClick={() => setShowOptions(showOptions === index ? null : index)} />
                      {showOptions === index &&
                        <div className={styles.options}>
                          <ul>
                            <li>Remove from list</li>
                            <li>Share</li>
                          </ul>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.player}>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default Downloads