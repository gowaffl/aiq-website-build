import { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  label?: string;
  labelColor?: string;
  accentColor?: string;
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VideoPlayer({
  src,
  className = "",
  autoPlay = true,
  loop = true,
  label,
  labelColor,
  accentColor = "#2A9FD6",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPlayFlash, setShowPlayFlash] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  // Sync play state with autoPlay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.volume = volume;
    if (autoPlay) {
      video.play().catch(() => {});
    }
  }, []);

  const resetHideTimer = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      if (!isDragging) setShowControls(false);
    }, 2500);
  }, [isDragging]);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    resetHideTimer();
  }, [resetHideTimer]);

  const handleMouseLeave = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setShowControls(false);
    setShowVolumeSlider(false);
  }, []);

  // Time update
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(video.currentTime);
        setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
      }
    };
    const onLoadedMetadata = () => setDuration(video.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, [isDragging]);

  // Fullscreen change listener
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setShowPlayFlash(true);
    setTimeout(() => setShowPlayFlash(false), 600);
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
    if (!next && video.volume === 0) {
      video.volume = 0.8;
      setVolume(0.8);
    }
  }, [isMuted]);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const val = parseFloat(e.target.value);
    setVolume(val);
    video.volume = val;
    if (val === 0) {
      video.muted = true;
      setIsMuted(true);
    } else {
      video.muted = false;
      setIsMuted(false);
    }
  }, []);

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Progress bar scrubbing
  const scrubToPosition = useCallback((clientX: number) => {
    const bar = progressRef.current;
    const video = videoRef.current;
    if (!bar || !video || !video.duration) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    video.currentTime = ratio * video.duration;
    setProgress(ratio * 100);
    setCurrentTime(ratio * video.duration);
  }, []);

  const handleProgressMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    scrubToPosition(e.clientX);

    const onMove = (ev: MouseEvent) => scrubToPosition(ev.clientX);
    const onUp = () => {
      setIsDragging(false);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [scrubToPosition]);

  const handleProgressTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    scrubToPosition(e.touches[0].clientX);

    const onMove = (ev: TouchEvent) => scrubToPosition(ev.touches[0].clientX);
    const onEnd = () => {
      setIsDragging(false);
      document.removeEventListener("touchmove", onMove);
      document.removeEventListener("touchend", onEnd);
    };
    document.addEventListener("touchmove", onMove, { passive: true });
    document.addEventListener("touchend", onEnd);
  }, [scrubToPosition]);

  const soundIndicatorColor = labelColor ?? accentColor;

  return (
    <div
      ref={containerRef}
      className={`relative group overflow-hidden bg-black select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => { setShowControls(true); resetHideTimer(); }}
    >
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted
        loop={loop}
        playsInline
        className="w-full h-auto block"
        onClick={togglePlay}
        style={{ cursor: "pointer" }}
      />

      {/* Center play/pause flash */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: showPlayFlash ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.25)",
          }}
        >
          {isPlaying ? (
            <Pause size={26} className="text-white" fill="white" />
          ) : (
            <Play size={26} className="text-white" fill="white" style={{ marginLeft: 2 }} />
          )}
        </div>
      </div>

      {/* Always-visible sound badge */}
      {isMuted && (
        <button
          onClick={(e) => { e.stopPropagation(); toggleMute(); }}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[11px] font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          title="Unmute"
        >
          <VolumeX size={12} />
          <span>Sound off</span>
        </button>
      )}

      {/* Bottom label pill */}
      {label && (
        <div
          className="absolute bottom-14 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white transition-all duration-300"
          style={{
            background: labelColor ? `${labelColor}CC` : "rgba(0,0,0,0.55)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${labelColor ? `${labelColor}50` : "rgba(255,255,255,0.2)"}`,
            opacity: showControls ? 0 : 1,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: soundIndicatorColor }}
          />
          {label}
        </div>
      )}

      {/* Controls overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          opacity: showControls ? 1 : 0,
          transform: showControls ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 0.22s ease, transform 0.22s ease",
          pointerEvents: showControls ? "auto" : "none",
        }}
      >
        {/* Gradient fade behind controls */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
          }}
        />

        <div
          className="relative px-3 pb-3 pt-1"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress bar */}
          <div
            ref={progressRef}
            className="relative h-1 rounded-full mb-3 cursor-pointer group/bar"
            style={{ background: "rgba(255,255,255,0.2)" }}
            onMouseDown={handleProgressMouseDown}
            onTouchStart={handleProgressTouchStart}
          >
            {/* Filled portion */}
            <div
              className="absolute top-0 left-0 h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: accentColor,
              }}
            />
            {/* Thumb dot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full shadow-lg transition-transform duration-100 group-hover/bar:scale-125"
              style={{
                left: `calc(${progress}% - 7px)`,
                background: "white",
                boxShadow: `0 0 8px ${accentColor}80`,
              }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              onClick={togglePlay}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-white transition-all duration-150 hover:scale-110 active:scale-95"
              style={{ background: "rgba(255,255,255,0.12)" }}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause size={13} fill="white" />
              ) : (
                <Play size={13} fill="white" style={{ marginLeft: 1 }} />
              )}
            </button>

            {/* Volume cluster */}
            <div
              className="flex items-center gap-2 relative"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={toggleMute}
                className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-white transition-all duration-150 hover:scale-110 active:scale-95"
                style={{ background: "rgba(255,255,255,0.12)" }}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
              </button>

              {/* Volume slider — expands on hover */}
              <div
                className="flex items-center overflow-hidden transition-all duration-250"
                style={{ width: showVolumeSlider ? 72 : 0, opacity: showVolumeSlider ? 1 : 0 }}
              >
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 cursor-pointer rounded-full appearance-none"
                  style={{
                    accentColor,
                    background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.25) ${(isMuted ? 0 : volume) * 100}%, rgba(255,255,255,0.25) 100%)`,
                  }}
                />
              </div>
            </div>

            {/* Time display */}
            <span className="text-white/70 text-[10px] font-mono tabular-nums ml-0.5">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Label pill (shown inside controls when controls are visible) */}
            {label && (
              <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                style={{
                  background: labelColor ? `${labelColor}CC` : "rgba(255,255,255,0.12)",
                  border: `1px solid ${labelColor ? `${labelColor}50` : "rgba(255,255,255,0.15)"}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: soundIndicatorColor ?? "white" }}
                />
                {label}
              </div>
            )}

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-white transition-all duration-150 hover:scale-110 active:scale-95"
              style={{ background: "rgba(255,255,255,0.12)" }}
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize size={13} /> : <Maximize size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
