import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.attributes;
  return (
    <div className="flex items-center mb-6 py-6 rounded-lg px-4 bg-black">
      <img
        src={
          artistId
            ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
            : songData?.images?.coverart
        }
        alt="artist"
        className="w-28 h-28 rounded-full object-cover"
      />

      <div className="ml-4">
        <h1 className="text-white text-xl font-bold mb-2">
          {artistId ? artist.name : songData?.title}
        </h1>
        <h2 className="text-white text-lg hover:text-cyan-500">
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

export default DetailsHeader;
