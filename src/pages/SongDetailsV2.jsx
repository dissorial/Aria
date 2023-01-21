import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Error,
  Loader,
  RelatedSongsV1,
  SongDetailsLyricsV2,
  SongDetailsHeaderV2,
} from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsV2Query,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';

const getV2trackId = (data) => {
  const relatedTracksObject = Object.values(
    data?.resources['related-tracks'],
  )[0].id;
  const splitObject = relatedTracksObject.split('-');
  const trackId = splitObject[splitObject.length - 1];
  return trackId;
};

const SongDetailsV2 = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsV2Query({ songid });
  const trackId = songData && getV2trackId(songData);

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid: trackId });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
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
