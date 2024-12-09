/* eslint-disable react/prop-types */
import './Music.css';

// Music Icon
import disc from '../../assets/ornamens/disc.png';

export default function Music({ onPlay, isPlaying, audioRef }) {
  return (
    <div onClick={onPlay} className="music-container">
      <img className={`music-icon ${isPlaying ? 'rotate' : ''}`} src={disc} alt="disc-audio" />
      <audio ref={audioRef} loop>
        <source src="audios/Westlife-I-Wanna-Grow-Old-with-You.opus" type="audio/ogg" />
        <source src="audios/Westlife_I-Wanna-Grow-Old-with-You.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
