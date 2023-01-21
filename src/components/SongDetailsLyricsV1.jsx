import React from 'react';

const SongDetailsLyricsV1 = ({ songData }) => {
  if (!songData) return null;
  return (
    <div className="text-center lg:text-left w-full lg:w-1/2 mb-6">
      <h2 className="text-white text-3xl font-bold mb-4">Lyrics</h2>
      {songData?.sections[1].type === 'LYRICS' ? (
        songData?.sections[1]?.text.map((line, i) => (
          <p
            key={`lyrics-${line}-${i}`}
            className="text-gray-400 text-base my-1"
          >
            {line}
          </p>
        ))
      ) : (
        <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
      )}
    </div>
  );
};

export default SongDetailsLyricsV1;
