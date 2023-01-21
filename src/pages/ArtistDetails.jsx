import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  ArtistDetailsHeader,
  Error,
  Loader,
  TopArtistSongs,
} from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  const data = artistData?.data[0]?.views['top-songs']?.data;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <ArtistDetailsHeader
        artistId={artistId}
        artistData={artistData?.data[0]}
      />
      <div className="py-12 px-6">
        <TopArtistSongs
          data={artistData?.data[0]?.views['top-songs']?.data}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          isOnArtistPage
        />
      </div>
    </div>
  );
};

export default ArtistDetails;
