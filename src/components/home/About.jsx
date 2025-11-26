import React, { useRef, useState, useEffect } from 'react';
import aboutDetailsImage from '../../assets/images/about-details.jpg';

// React Icons
import { 
  HiPlay,
  HiPause,
  HiArrowsPointingOut,
  HiArrowsPointingIn,
  HiCog6Tooth,
  HiAcademicCap,
  HiBookOpen
} from 'react-icons/hi2';

import { 
  MdPictureInPictureAlt,
  MdVolumeUp,
  MdVolumeMute,
  MdVolumeDown,
  MdForward10,
  MdReplay10
} from 'react-icons/md';

// ============= DATA CONSTANTS =============
const ABOUT_DATA = {
  badge: 'আমাদের সম্পর্কে',
  title: 'মেধা ও মনন বিকাশে',
  highlightedTitle: 'আমাদের পথচলা',
  description: 'কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর ১৯৮৪ সালে প্রতিষ্ঠিত একটি স্বেচ্ছাসেবী সংগঠন। দীর্ঘ চার দশকেরও বেশি সময় ধরে আমরা শিক্ষার্থীদের মেধা বিকাশ, নৈতিক চরিত্র গঠন এবং সুস্থ সংস্কৃতির চর্চায় নিরলসভাবে কাজ করে যাচ্ছি।',
  videoTitle: 'কিশোরকণ্ঠ মেধাবৃত্তি-২০২৫',
  videoSrc: '/about-video.mp4'
};

const FEATURES = [
  {
    icon: 'graduation',
    title: 'মেধাবৃত্তি পরীক্ষা',
    description: 'শিক্ষার্থীদের সুপ্ত প্রতিভা অন্বেষণে প্রতি বছর আমরা আয়োজন করি বিশাল মেধাবৃত্তি পরীক্ষা।',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-600'
  },
  {
    icon: 'book',
    title: 'নৈতিক শিক্ষা',
    description: 'পুথিগত বিদ্যার পাশাপাশি আমরা গুরুত্ব দেই সততা, দেশপ্রেম এবং নৈতিক মূল্যবোধের ওপর।',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-600'
  }
];

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2];

const ICON_MAP = {
  graduation: HiAcademicCap,
  book: HiBookOpen
};

// ============= UTILITY FUNCTIONS =============
const formatTime = (seconds) => {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// ============= SUB COMPONENTS =============
const Badge = ({ text }) => (
  <div className="inline-flex items-center px-3 py-1 mb-4 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600">
    <span className="w-2 h-2 mr-2 rounded-full bg-emerald-500"></span>
    {text}
  </div>
);

const SectionHeader = ({ badge, title, highlightedTitle }) => (
  <div className="mb-12 text-center">
    <Badge text={badge} />
    <h2 className="text-3xl font-bold leading-tight text-gray-800 md:text-4xl">
      {title} <span className="text-emerald-600">{highlightedTitle}</span>
    </h2>
  </div>
);

const AnimatedBlob = () => (
  <>
    <div className="absolute rounded-full -top-4 -left-4 w-72 h-72 bg-emerald-100 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div className="absolute bg-teal-100 rounded-full -bottom-4 -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  </>
);

// Progress Bar Component
const ProgressBar = ({ currentTime, duration, onSeek, buffered }) => {
  const progressRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(0);

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseMove = (e) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    setHoverTime(time);
    setHoverPosition(pos * 100);
  };

  const handleClick = (e) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    onSeek(pos * duration);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging && progressRef.current) {
        const rect = progressRef.current.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        onSeek(pos * duration);
      }
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, duration, onSeek]);

  const progress = (currentTime / duration) * 100 || 0;

  return (
    <div className="relative py-2 cursor-pointer group/progress">
      <div
        ref={progressRef}
        className="relative h-1 transition-all duration-150 bg-white/30 rounded-full group-hover/progress:h-1.5"
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverTime(null)}
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute top-0 left-0 h-full transition-all rounded-full bg-white/40"
          style={{ width: `${buffered}%` }}
        />
        <div
          className="absolute top-0 left-0 h-full transition-all rounded-full bg-emerald-500"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute w-3 h-3 transition-all transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg opacity-0 top-1/2 group-hover/progress:opacity-100 group-hover/progress:w-4 group-hover/progress:h-4 hover:scale-125"
          style={{ left: `${progress}%` }}
        />
        {hoverTime !== null && (
          <div
            className="absolute px-2 py-1 text-xs font-medium text-white transform -translate-x-1/2 rounded bg-black/80 -top-8 whitespace-nowrap backdrop-blur-sm"
            style={{ left: `${hoverPosition}%` }}
          >
            {formatTime(hoverTime)}
          </div>
        )}
      </div>
    </div>
  );
};

// Speed Control Component
const SpeedControl = ({ playbackRate, onSpeedChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-white transition bg-white/10 rounded hover:bg-white/20"
        title="Playback Speed"
      >
        <HiCog6Tooth className="w-5 h-5" />
        <span className="hidden sm:inline">{playbackRate}x</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden z-50 min-w-[120px]">
            <div className="py-1">
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 border-b border-gray-700">Speed</div>
              {PLAYBACK_SPEEDS.map((speed) => (
                <button
                  key={speed}
                  onClick={() => {
                    onSpeedChange(speed);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-sm text-left transition hover:bg-white/10 ${
                    playbackRate === speed ? 'text-emerald-400 font-semibold' : 'text-white'
                  }`}
                >
                  {speed === 1 ? 'Normal' : `${speed}x`}
                  {playbackRate === speed && <span className="float-right">✓</span>}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Volume Control Component
const VolumeControl = ({ volume, isMuted, onVolumeChange, onMuteToggle }) => {
  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <MdVolumeMute className="w-6 h-6" />;
    if (volume < 0.5) return <MdVolumeDown className="w-6 h-6" />;
    return <MdVolumeUp className="w-6 h-6" />;
  };

  return (
    <div className="flex items-center gap-2 group/volume">
      <button
        onClick={onMuteToggle}
        className="p-1.5 text-white transition rounded-full hover:bg-white/10"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {getVolumeIcon()}
      </button>

      <div className="w-0 overflow-hidden transition-all duration-300 group-hover/volume:w-24">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          className="w-20 h-1 rounded-lg appearance-none cursor-pointer bg-white/30 accent-emerald-500"
        />
      </div>
    </div>
  );
};

// Modern Video Controls (Bottom Bar)
const ModernVideoControls = ({
  isPlaying,
  isMuted,
  volume,
  currentTime,
  duration,
  buffered,
  playbackRate,
  isFullScreen,
  onPlayPause,
  onVolumeChange,
  onMuteToggle,
  onSeek,
  onSpeedChange,
  onPipToggle,
  onFullScreenToggle,
  onSkip,
  showControls
}) => {
  return (
    <div 
      className={`absolute inset-x-0 bottom-0 z-30 transition-all duration-500 ease-in-out ${
        showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="relative px-4 pt-10 pb-4 md:px-6">
        <div className="mb-2">
          <ProgressBar
            currentTime={currentTime}
            duration={duration}
            buffered={buffered}
            onSeek={onSeek}
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={onPlayPause}
              className="text-white transition-transform hover:text-emerald-400 hover:scale-110"
            >
              {isPlaying ? <HiPause className="w-8 h-8" /> : <HiPlay className="w-8 h-8" />}
            </button>

             <div className="items-center hidden gap-1 sm:flex">
               <button onClick={() => onSkip(-10)} className="p-1.5 text-gray-200 hover:text-white rounded-full hover:bg-white/10 transition">
                 <MdReplay10 className="w-6 h-6" />
               </button>
               <button onClick={() => onSkip(10)} className="p-1.5 text-gray-200 hover:text-white rounded-full hover:bg-white/10 transition">
                 <MdForward10 className="w-6 h-6" />
               </button>
             </div>

            <VolumeControl
              volume={volume}
              isMuted={isMuted}
              onVolumeChange={onVolumeChange}
              onMuteToggle={onMuteToggle}
            />

            <div className="hidden font-mono text-xs font-medium text-gray-300 md:block">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <SpeedControl
              playbackRate={playbackRate}
              onSpeedChange={onSpeedChange}
            />
            <button
              onClick={onPipToggle}
              className="hidden p-2 text-white transition rounded-lg sm:block hover:bg-white/10 hover:text-emerald-400"
            >
              <MdPictureInPictureAlt className="w-5 h-5" />
            </button>
            <button
              onClick={onFullScreenToggle}
              className="p-2 text-white transition rounded-lg hover:bg-white/10 hover:text-emerald-400"
            >
              {isFullScreen ? <HiArrowsPointingIn className="w-6 h-6" /> : <HiArrowsPointingOut className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Modern Video Player Container
const ModernVideoPlayer = ({ videoSrc, videoTitle, posterImage }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percentage = (bufferedEnd / video.duration) * 100;
        setBuffered(percentage);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('progress', handleProgress);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('progress', handleProgress);
    };
  }, []);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullScreenChange);
  }, []);

  useEffect(() => {
    const show = () => {
      setShowControls(true);
      clearTimeout(controlsTimeoutRef.current);
      if (isPlaying) {
        controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', show);
      container.addEventListener('touchstart', show);
      container.addEventListener('click', show);
    }

    if (!isPlaying) {
      setShowControls(true);
      clearTimeout(controlsTimeoutRef.current);
    } else {
      controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', show);
        container.removeEventListener('touchstart', show);
        container.removeEventListener('click', show);
      }
      clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  const togglePlay = (e) => {
    e?.stopPropagation();
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSkip = (seconds) => {
    if(videoRef.current) videoRef.current.currentTime += seconds;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
    videoRef.current.muted = newVolume === 0;
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.muted = false;
      const newVolume = volume === 0 ? 1 : volume;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleSeek = (time) => {
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleSpeedChange = (speed) => {
    videoRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  const handlePipToggle = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      videoRef.current?.requestPictureInPicture();
    }
  };

  return (
    <div className="relative select-none group/video">
      <AnimatedBlob />
      
      <div 
        ref={containerRef} 
        className={`relative overflow-hidden bg-black shadow-2xl rounded-xl w-full group/container ${
          isFullScreen ? 'flex items-center justify-center h-screen' : 'aspect-video border-2 border-white'
        }`}
      >
        <video 
          ref={videoRef}
          className={`w-full h-full cursor-pointer ${isFullScreen ? 'object-contain' : 'object-contain'}`}
          loop 
          playsInline
          src={videoSrc}
          poster={posterImage}
          onClick={togglePlay}
        >
          Your browser does not support the video tag.
        </video>

        {/* Video Title Overlay */}
        <div 
          className={`absolute top-0 left-0 z-20 p-4 transition-opacity duration-300 ${
            !isPlaying || showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="px-3 py-1.5 text-xs font-bold text-white bg-black/40 backdrop-blur-md rounded-lg border border-white/10 md:text-sm shadow-lg">
            {videoTitle}
          </div>
        </div>

        {/* Center Controls Overlay (Responsive Size, No Blur) */}
        <div 
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 bg-black/10 ${
            !isPlaying || showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={togglePlay}
        >
          {/* gap-4 for mobile, gap-8 for desktop */}
          <div className="flex items-center gap-4 md:gap-8" onClick={(e) => e.stopPropagation()}>
            
            {/* Skip Backward 10s */}
            <button 
              onClick={() => handleSkip(-10)}
              className="p-2 text-white transition-all transform rounded-full md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm hover:scale-110 active:scale-95 group/skip"
              title="-10s"
            >
              <MdReplay10 className="w-5 h-5 md:w-8 md:h-8 opacity-90 group-hover/skip:opacity-100" />
            </button>

            

             {/* Skip Forward 10s */}
             <button 
              onClick={() => handleSkip(10)}
              className="p-2 text-white transition-all transform rounded-full md:p-3 bg-black/40 hover:bg-black/60 backdrop-blur-sm hover:scale-110 active:scale-95 group/skip"
              title="+10s"
            >
              <MdForward10 className="w-5 h-5 md:w-8 md:h-8 opacity-90 group-hover/skip:opacity-100" />
            </button>
          </div>
        </div>

        <ModernVideoControls
          isPlaying={isPlaying}
          isMuted={isMuted}
          volume={volume}
          currentTime={currentTime}
          duration={duration}
          buffered={buffered}
          playbackRate={playbackRate}
          isFullScreen={isFullScreen}
          onPlayPause={togglePlay}
          onVolumeChange={handleVolumeChange}
          onMuteToggle={toggleMute}
          onSeek={handleSeek}
          onSpeedChange={handleSpeedChange}
          onPipToggle={handlePipToggle}
          onFullScreenToggle={toggleFullScreen}
          onSkip={handleSkip}
          videoTitle={videoTitle}
          showControls={showControls || !isPlaying}
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description, bgColor, textColor }) => {
  const IconComponent = ICON_MAP[icon];
  
  return (
    <div className="flex items-start space-x-4">
      <div className={`flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg ${bgColor} ${textColor}`}>
        <IconComponent className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutContent = ({ description, features }) => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed text-gray-600">
      <span className="font-bold text-gray-800">কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর</span> {description.replace('কিশোরকণ্ঠ পাঠক ফোরাম, সিলেট মহানগর', '')}
    </p>

    <div className="mt-4 space-y-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>

    <div className="pt-4">
      <button className="px-8 py-3 font-semibold text-white transition-all transform rounded-lg shadow-lg bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-1">
        আরও জানুন
      </button>
    </div>
  </div>
);

const About = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-7xl">
          <SectionHeader 
            badge={ABOUT_DATA.badge}
            title={ABOUT_DATA.title}
            highlightedTitle={ABOUT_DATA.highlightedTitle}
          />
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <ModernVideoPlayer 
              videoSrc={ABOUT_DATA.videoSrc}
              videoTitle={ABOUT_DATA.videoTitle}
              posterImage={aboutDetailsImage}
            />
            <AboutContent 
              description={ABOUT_DATA.description}
              features={FEATURES}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;