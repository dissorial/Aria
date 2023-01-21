import { useSelector, useDispatch } from 'react-redux';
import { RelatedSongsV1, SongDetailsHeaderV1 } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetailsV1 = ({ songData, data }) => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col pb-24">
      <SongDetailsHeaderV1 songData={songData} />

      <div className="py-12 px-6">
        {data ? (
          <RelatedSongsV1
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            cardTitle="Related songs"
          />
        ) : (
          <h2 className="text-white text-3xl font-bold mb-8">
            No related songs found
          </h2>
        )}
      </div>
    </div>
  );
};

export default SongDetailsV1;
