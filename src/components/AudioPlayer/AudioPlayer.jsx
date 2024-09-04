import { useState, useRef, useEffect } from 'react';
import styles from "./AudioPlayer.module.css";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Set initial volume to 20%
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.audioPlayer}>
      <button className={styles.playButton} onClick={togglePlay}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
      <audio ref={audioRef} loop autoPlay>
        <source src="assets/Ryisan The Champyun-LV or Prada Limited.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
