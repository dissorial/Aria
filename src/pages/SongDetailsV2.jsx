import { useSelector, useDispatch } from 'react-redux';
import { RelatedSongsV1, SongDetailsHeaderV2 } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetailsV2 = ({ songData }) => {
  const getV2trackId = (data) => {
    const relatedTracksObject = Object.values(
      data?.resources['related-tracks'],
    )[0].id;
    const splitObject = relatedTracksObject.split('-');
    const trackId = splitObject[splitObject.length - 1];
    return trackId;
  };

  const trackId = getV2trackId(songData);

  const { data } = useGetSongRelatedQuery({
    songid: trackId,
  });
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
      <SongDetailsHeaderV2 songData={songData} />

      <div className="flex flex-col lg:flex-row">
        <div className="py-12 px-6">
          <RelatedSongsV1
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            cardTitle="Related songs"
          />
        </div>
      </div>
    </div>
  );
};
export default SongDetailsV2;
