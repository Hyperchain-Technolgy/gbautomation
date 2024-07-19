import { useState } from "react";
import ThreeScene from "./ThreeScene"
import Tiles from "./Tiles"
import VideoPlayer from "./VideoPlayer"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  const handleTileClick = (src) => {
    setVideoSrc(src);
  };

  const handleCloseVideo = () => {
    setVideoSrc(null);
  };

  return (
    <section className="flex justify-center items-center bg-gray-900">
      <section className="flex flex-col gap-5 justify-center items-center absolute top-56 left-96 z-10">
        <Tiles name="Part 1" src="/video/video1.mp4" onClick={handleTileClick} />
        <Tiles name="Part 2" src="/video/video2.mp4" onClick={handleTileClick} />
        <Tiles name="Part 3" src="/video/video3.mp4" onClick={handleTileClick} />
      </section>
      <ThreeScene />
      {videoSrc && <VideoPlayer src={videoSrc} onClose={handleCloseVideo} />}
    </section>
  )
}

export default Hero