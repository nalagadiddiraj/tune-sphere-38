import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface PlayerProps {
  currentSong?: {
    title: string;
    artist: string;
    image: string;
    audioSrc: string;
  };
}

export const Player = ({ currentSong }: PlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.audioSrc;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100;
    }
  }, [volume, isMuted]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-player z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Current Song Info */}
            <div className="flex items-center gap-4 w-1/4 min-w-0">
              {currentSong ? (
                <>
                  <img
                    src={currentSong.image}
                    alt={currentSong.title}
                    className="w-14 h-14 rounded object-cover"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">
                      {currentSong.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {currentSong.artist}
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-sm text-muted-foreground">No song playing</div>
              )}
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center gap-2 w-2/4">
              <div className="flex items-center gap-4">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Shuffle className="w-4 h-4" />
                </button>
                <button className="text-foreground hover:text-primary transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={togglePlayPause}
                  disabled={!currentSong}
                  className={cn(
                    "w-10 h-10 bg-foreground rounded-full flex items-center justify-center",
                    "hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-background fill-background" />
                  ) : (
                    <Play className="w-5 h-5 text-background fill-background ml-0.5" />
                  )}
                </button>
                <button className="text-foreground hover:text-primary transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleSeek}
                  className="flex-1"
                />
                <span className="text-xs text-muted-foreground w-10">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 w-1/4 justify-end">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <Slider
                value={[isMuted ? 0 : volume]}
                max={100}
                step={1}
                onValueChange={(value) => {
                  setVolume(value[0]);
                  setIsMuted(false);
                }}
                className="w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
