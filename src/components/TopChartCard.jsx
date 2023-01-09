import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className="w-full flex items-center bg-black bg-opacity-80 rounded-md p-1
  "
  >
    <div className="w-1/4 p-1">
      <img src={song?.images?.coverart} alt={song?.title} />
    </div>
    <div className="w-1/2 pl-4">
      <p className="font-bold text-white mb-1 truncate text-xl">
        <Link to={`/songs/${song.key}`}>{song?.title}</Link>
      </p>
      <p className="text-gray-400 truncate mt-2 text-lg">
        <Link to={`/artists/${song?.artists[0].adamid}`}>{song?.subtitle}</Link>
      </p>
    </div>
    <div className="w-fit ml-6 flex justify-center cursor-pointer">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  </div>
);

export default TopChartCard;
