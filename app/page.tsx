"use client"
import { useState, useEffect, useRef } from 'react';
import Flower from "@/app/img/flower.png";
import { Noto_Serif_Khitan_Small_Script, Poppins } from 'next/font/google';
import { FaPlay, FaPause } from 'react-icons/fa';

const FontNotoSerif = Noto_Serif_Khitan_Small_Script({
  weight: '400',
  subsets: ['latin']
});

const PoppinsFont = Poppins({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  const [flowerClicked, setFlowerClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFlowerClick = () => {
    if (!flowerClicked) {
      if (audioRef.current !== null) {
        (audioRef.current as HTMLAudioElement).play();
      }
    }
    setFlowerClicked(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      if (audioRef.current !== null) {
        (audioRef.current as HTMLAudioElement).pause();
      }
    } else {
      if (audioRef.current !== null) {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current = new Audio('/song/song.mp3');
    audioRef.current.loop = true;
    audioRef.current.play();

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <main className='overflow-y-hidden'>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        {!flowerClicked ? (
          <>
            <h1 className={`${FontNotoSerif.className}`}>Here&apos;s flower for the prettiest girl</h1>
            <img 
              src={Flower.src} 
              className='w-60' 
              onClick={handleFlowerClick}
              style={{ cursor: 'pointer', marginTop: '20px' }} 
              alt="Flower"
            />
            <small className={`${FontNotoSerif.className}`}>click the flower</small>
          </>
        ) : (
          <div className='px-6 py-10' style={{ textAlign: 'center' }}>
            <p className={`${FontNotoSerif.className}`}>
              <span className='font-bold text-2xl'>Happy National Girlfriend Day ❤️</span><br /><br />
              <span className={`${PoppinsFont.className}`}>Thank you for being the person who inspires me all this time, thank you for giving advice, and always encouraging me all this time.<br /><br />
              You are the most beautiful person I have ever seen, your heart and appearance are truly beautiful, you are also the greatest woman I have ever seen all this time. You are like an angel from heaven sent to guide Darwan, you know? HAHAHAHA<br /><br />
              I can&apos;t imagine if I end up with you, will my life be even more cheerful? Hahahaha or will my life be more happy than before? Because I think you are like an angel, you are the perfect woman I have ever seen so far.<br /><br />
              Wishing you a blessed Umrah, I will always pray for the best for you here.<br /><br />
              I send flowers to prettiest girl, thank you very much.<br /><br />
              With love,</span><br />
              <span className='font-bold'>Darwan</span>
            </p>
          </div>
        )}
      </div>

      <div 
        onClick={togglePlayPause} 
        className="record"
      >
        <div className="record-center">
          {isPlaying ? <FaPause className="icon" /> : <FaPlay className="icon" />}
        </div>
      </div>
    </main>
  );
}
