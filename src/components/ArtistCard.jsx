import React from 'react';
import { Link } from 'react-router-dom';

const ArtistCard = ({ track }) => (
  <div className="mx-auto animate-slideup group relative bg-black cursor-pointer w-[250px] h-[250px]">
    <img
      alt="Developer"
      src={track?.images?.coverart}
      className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity group-hover:opacity-40"
    />
    <div className="relative h-full px-4">
      <p className="text-xl text-center font-bold text-white flex items-center align-center justify-center h-full">
        <Link to={`/artists/${track?.artists[0].adamid}`}>
          {track?.subtitle}
        </Link>
      </p>
    </div>
  </div>
);

export default ArtistCard;
