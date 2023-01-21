import React from 'react';

const SongDetailsLyricsV2 = ({ songData }) => {
  if (!songData) return null;
  const lyricsObj = Object.values(songData?.resources?.lyrics);
  const lyricsData = lyricsObj[0]?.attributes?.text;
  return (
    <div className="text-center lg:text-left w-full lg:w-1/2 mb-6">
      <h2 className="text-white text-3xl font-bold mb-4">Lyrics</h2>
      {lyricsData ? (
        lyricsData?.map((lyric, index) => (
          <p className="text-white text-lg" key={index}>
            {lyric}
          </p>
        ))
      ) : (
        <p className="text-white text-xl">No lyrics found</p>
      )}
    </div>
  );
};

export default SongDetailsLyricsV2;
