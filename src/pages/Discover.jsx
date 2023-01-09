import { useSelector, useDispatch } from 'react-redux';
import TopChartCard from '../components/TopChartCard';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();
  // console.log('top charts', data);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const topPlays = data?.slice(0, 6);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        {topPlays?.map((song, i) => (
          <TopChartCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
