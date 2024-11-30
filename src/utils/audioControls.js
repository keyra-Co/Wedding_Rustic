import { useRef, useState } from 'react';

export const useAudio = () => {
  const audioRef = useRef(null); // Reference ke elemen audio

  const [isPlaying, setIsPlaying] = useState(false); // State untuk play/pause

  // Fungsi untuk toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio
    } else {
      audioRef.current.play(); // Play audio
    }
    setIsPlaying(!isPlaying); // Ubah state
  };

  return { audioRef, isPlaying, togglePlay };
};
