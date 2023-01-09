import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
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

  // console.log('artist data', artistData?.data[0]?.views['top-songs']?.data);
  const data = artistData?.data[0]?.views['top-songs']?.data;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  // song data in artistData?.data[0]?.views['top-songs']?.data
  // pass this to component

  // song urls in artistData?.data[0]?.views['top-songs']?.data[0].attributes.previews[0].url

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  if (error) return <Error />;

  return (
    <div className="py-24 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
      <div className="w-full">
        <RelatedSongs
          data={artistData?.data[0].views['top-songs']?.data}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
          cardTitle="artistdetails related"
        />
      </div>
    </div>
  );
};

export default ArtistDetails;
