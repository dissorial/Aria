import SongBar from './SongBar';

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="">
    <h2 className="text-white text-3xl font-bold mb-4">Related Songs</h2>
    {data?.slice(0, 10).map((song, i) => (
      <SongBar
        key={`${artistId}-${song.key}-${i}`}
        song={song}
        i={i}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    ))}
  </div>
);

export default RelatedSongs;
