import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Error,
  Loader,
  RelatedSongsV1,
  SongDetailsLyricsV1,
  SongDetailsHeaderV1,
} from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsV1Query,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';

const SongDetailsV1 = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsV1Query({ songid });

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />;

  if (error) return <Error />;
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <SongDetailsHeaderV1 songData={songData} />

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
  );
};

export default SongDetailsV1;
