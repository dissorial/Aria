import React from 'react';

const Track = ({ activeSong }) => {
  let artistName;
  let songName;
  let artwork;
  if (activeSong?.attributes) {
    // eslint-disable-next-line no-unsafe-optional-chaining
    ({ artistName, name: songName, artwork } = activeSong?.attributes);
  } else {
    ({ subtitle: artistName, title: songName, images: artwork } = activeSong);
  }
  return (
    <div className="flex-1 flex items-center justify-start">
      <div className="hidden sm:block h-16 w-16 mr-4">
        <img
          src={
            activeSong.subtitle
              ? artwork.coverart.replace('{w}', '125').replace('{h}', '125')
              : artwork?.url.replace('{w}', '125').replace('{h}', '125')
          }
          alt="cover art"
          className="rounded-full"
        />
      </div>
      <div className="w-[50%]">
        <p className="truncate text-white font-bold text-lg">
          {songName || 'No active Song'}
        </p>
        <p className="truncate text-gray-300 text-lg">
          {artistName || 'No active Song'}
        </p>
      </div>
    </div>
  );
};

export default Track;
