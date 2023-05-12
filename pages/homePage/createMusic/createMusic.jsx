import MusicCard from '@/components/headerComponents/musicCard';
import createMusic from '../../../styles/pages/create-music.module.css'

const cards = [
  {
    imageSrc: '/img/create-music/cloud.png',
    title: 'Upload Song',
  },
  {
    imageSrc: '/img/create-music/vibes.png',
    title: 'License Voice',
  },
  {
    imageSrc: '/img/create-music/music-arrow.png',
    title: 'Create Music',
  }
];

export default function CreateMusic() {
  return (
    <div className={createMusic.createMusic_container}>
      <div className={createMusic.createMusic_title}>
        <h1>Create Music</h1>
        <p>Upload your song idea, pick any voice in our catalog and let a professional perform your next hit.</p>
      </div>
      <div className={createMusic.card_container}>
      {cards.map((card, index) => {
        return (
          <div key={index} className={createMusic.card_wrapper}>
            <MusicCard imageSrc={card.imageSrc} title={card.title} />
          </div>
        );
      })}
    </div>
    </div>
  )
}