import { Link } from 'react-router-dom';

const ArtistDetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.attributes;
  const { origin } = artist;
  return (
    <div className="flex items-center mb-6 mt-12 py-16 px-12 shadow-lg bg-opacity-40 bg-[#2E5E5E]">
      <img
        src={
          artistId
            ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
            : songData?.images?.coverart
        }
        alt="artist"
        className="w-52 h-52 object-cover shadow-xl shadow-black"
      />

      <div className="ml-8">
        {artist?.origin ? (
          <p className="text-white text-xl mb-4">{`From ${origin}`}</p>
        ) : (
          <p className="text-white text-xl mb-4">Origin unknown</p>
        )}
        <h1 className="text-white text-4xl font-bold mb-2 mt-6">
          {artistId ? artist.name : songData?.title}
        </h1>
        <h2 className="text-white text-lg">
          {artistId ? (
            artist?.genreNames[0]
          ) : (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              {songData?.subtitle}
            </Link>
          )}
        </h2>
      </div>
    </div>
  );
};

export default ArtistDetailsHeader;
