import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ src, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen().catch((err) => {
        console.error('Error attempting to enable full-screen mode:', err);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <video ref={videoRef} src={src} controls autoPlay className="w-full h-full" />
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">X</button>
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VideoPlayer;