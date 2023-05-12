import Image from 'next/image';
import createMusic from '../../styles/pages/create-music.module.css'

const MusicCard = ({ imageSrc, title }) => {
  return (
    <div className={createMusic.card}>
      <div className={createMusic.card_image}>
        <Image src={imageSrc} width={81} height={81} alt={title} />
      </div>
      <div className={createMusic.card_title}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default MusicCard;