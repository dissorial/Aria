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

  console.log(
    artistData?.data[0]?.views['top-songs']?.data[0].attributes.previews[0].url,
  );

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
    <div className="py-24 px-6 sm:px-8 md:px-10 lg:px-12 flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          {/* {artistData?.data[0]?.views['top-songs']?.data.map((song) => (
            <p className="text-white text-xl p-2">{song.attributes.name}</p>
          ))} */}
          <RelatedSongs
            data={artistData?.data[0]?.views['top-songs']?.data}
            artistId={artistId}
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

export default ArtistDetails;
