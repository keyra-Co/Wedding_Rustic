/* eslint-disable react/prop-types */
import './Music.css';

// Music Icon
import disc from '../../assets/ornamens/disc.png';

export default function Music({ onPlay, isPlaying, audioRef }) {
  return (
    <div onClick={onPlay} className="music-container">
      <img className={`music-icon ${isPlaying ? 'rotate' : ''}`} src={disc} alt="disc-audio" />
      <audio ref={audioRef} loop>
        <source src="audios/Calum_Scott.opus" type="audio/ogg" />
        <source src="audios/Elvis_presley.opus" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
