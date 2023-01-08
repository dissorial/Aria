import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Loading song details" />;
  if (error) return <Error />;

  return (
    <div className="py-24 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="flex flex-col lg:flex-row">
        <div className="text-center lg:text-left w-full lg:w-1/2 mb-6">
          <h2 className="text-white text-3xl font-bold mb-4">Lyrics</h2>
          {songData?.sections[1].type === 'LYRICS' ? (
            songData?.sections[1].text.map((lyric) => (
              <p className="text-white text-lg">{lyric}</p>
            ))
          ) : (
            <p className="text-white text-xl">No lyrics found</p>
          )}
        </div>

        <div className="w-full lg:w-1/2">
          <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
