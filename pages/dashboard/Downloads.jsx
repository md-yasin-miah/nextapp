'use client';
import { useEffect, useState } from 'react';
import d from '../../styles/pages/dashboard/downloads.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from '@/components/shared/AudioPlayer';
import { NoDataFound } from '@/components/helper';
import { downloadedMusicList } from '@/axios/axios';
const Downloads = () => {
  const [showOptions, setShowOptions] = useState(null);
  const dispatch = useDispatch();
  const { downloadedMusic_List } = useSelector((state) => state.musicDownload);
  console.log('downloadedMusicList', downloadedMusic_List)
  useEffect(() => {
    dispatch(downloadedMusicList());
  }, []);
  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4>Listen Your Downloaded Music</h4>
      </div>
      <div className={d.container}>
        <div className={d.songs}>
          {downloadedMusic_List?.length > 0 &&
            downloadedMusic_List.map((item, index) => (
              <div key={index} className={d.song}>
                <div className={d.song_title}>
                  <div className={d.song_img}>
                    <Image width={48} height={48} src="/img/song.png" alt="" />
                  </div>
                  <span className={d.songName}>{item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}</span>
                </div>

                <div className={d.info}>
                  <span className={d.category}>{item.genre}</span>
                  <span className={d.time}>5:21</span>
                  <div className={d.icons}>
                    <div className={d.playIcon}>
                      <Image width={32} height={32} src="/svg/play.svg" alt="" />
                    </div>
                    <div className={d.threeDotsIcon}>
                      <Image width={20} height={20} src="/svg/threeDots.svg" alt="" onClick={() => setShowOptions(showOptions === index ? null : index)} />
                      {showOptions === index &&
                        <div className={d.options}>
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
          {
            downloadedMusic_List?.length <= 0 &&
            <NoDataFound />
          }
        </div>
      </div>
      <div className={d.player}>
        <AudioPlayer />
      </div>
    </div>
  )
}

export default Downloads