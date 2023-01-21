import SongBar from './SongBar';

const RelatedSongsV1 = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
  cardTitle,
  isOnArtistPage,
}) => {
  const filteredData = data?.filter((song) => song.images);

  return (
    <div className="flex flex-col">
      <h2 className="text-white text-3xl font-bold mb-8">{cardTitle}</h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredData?.slice(0, 10).map((song, i) => (
          <SongBar
            key={`${artistId}-${song.key}-${i}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            isOnArtistPage={isOnArtistPage}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongsV1;
