import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const videos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    "https://www.w3schools.com/html/movie.mp4",
];

const MiddleSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const prevSlide = () => {
        setProgress(0);
        setCurrentIndex((prev) =>
            prev === 0 ? videos.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setProgress(0);
        setCurrentIndex((prev) =>
            prev === videos.length - 1 ? 0 : prev + 1
        );
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video || !video.duration) return;

        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
    };

    return (
        <section className="flex items-center justify-center h-full py-1">
            {/* Card Wrapper */}
            <div className="relative">
                {/* Video Card */}
                <div className="relative w-full min-h-[600px] max-w-[400px] aspect-[4/5]  overflow-hidden rounded-lg bg-black shadow-2xl shadow-black/40">
                    <video
                        ref={videoRef}
                        key={currentIndex}
                        src={videos[currentIndex]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onTimeUpdate={handleTimeUpdate}
                        className="w-full h-full object-cover"
                    />

                    {/* Progress Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
                        <div
                            className="h-full bg-white transition-[width] duration-200"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Left Button */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous video"
                    className="absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:opacity-80 shadow-2xl shadow-black/40"
                >
                    <FiChevronLeft />
                </button>

                {/* Right Button */}
                <button
                    onClick={nextSlide}
                    aria-label="Next video"
                    className="absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white hover:opacity-80 shadow-2xl shadow-black/40"
                >
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
};

export default MiddleSection;
