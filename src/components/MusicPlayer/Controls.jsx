import React from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Controls = ({ isPlaying, handlePlayPause }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
  </div>
);

export default Controls;
