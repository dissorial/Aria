import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="mx-auto animate-slideup max-w-[250px] sm:max-w-none sm:mx-0 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="p-4 shadow-md hover:cursor-pointer rounded-md m-2 bg-black bg-opacity-80">
        <div className="relative group ">
          <div
            className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
              activeSong?.title === song.title
                ? 'flex bg-black bg-opacity-70'
                : 'hidden'
            }`}
          >
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <img
            src={song.images?.coverart}
            title="Song image"
            className="h-full w-full rounded-lg object-cover shadow-xl"
          />
        </div>

        <div className="mt-3 ">
          <p className="truncate text-xl font-bold text-gray-100 mb-1">
            <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          </p>

          <p className="truncate text-sm text-gray-300">
            <Link
              to={
                song.artists
                  ? `/artists/${song?.artists[0]?.adamid}`
                  : '/top-artists'
              }
            >
              {song.subtitle}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SongCard;
