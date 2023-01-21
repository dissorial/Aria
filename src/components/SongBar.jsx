import React from 'react';
import { Link } from 'react-router-dom';

import PlayPause from './PlayPause';

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  isOnArtistPage,
}) => {
  const idk = isOnArtistPage ? 'v2' : 'v1';
  return (
    <div className="flex px-4 sm-w-1/4 py-4 items-center bg-[#172F2F] bg-opacity-60 justify-between p-2 rounded-lg cursor-pointer mb-2 hover:bg-opacity-100 hover:shadow-md">
      <div className="flex items-center w-5/6">
        <img
          className="w-1/4 h-full rounded-lg"
          src={
            artistId
              ? song?.attributes?.artwork?.url
                .replace('{w}', '125')
                .replace('{h}', '125')
              : song?.images?.coverart
          }
          alt={song?.title}
        />
        <div className="mx-4 w-2/3">
          <Link to={`/songs/${idk}/${isOnArtistPage ? song.id : song.key}`}>
            <p className="truncate text-white text-bold text-xl font-bold hover:text-teal-400">
              {artistId ? song?.attributes?.name : song?.title}
            </p>
          </Link>

          {!artistId && (
            <Link to={`/artists/${song?.artists?.[0]?.adamid}`}>
              <p className="truncate text-gray-300 text-sm tracking-wide mt-2 hover:text-teal-500">
                {artistId ? song?.attributes?.artistName : song?.subtitle}
              </p>
            </Link>
          )}
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
        artistId={artistId}
      />
    </div>
  );
};

export default SongBar;
