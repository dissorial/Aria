import { Link } from 'react-router-dom';

const SongDetailsHeaderV2 = ({ songData }) => {
  if (!songData) return null;
  const dataObject = Object.values(songData?.resources['shazam-songs'])[0];
  const { artist, title, images } = dataObject.attributes;
  const { 'artist-highlights': artistHighlights } = dataObject.relationships;
  return (
    <div className="flex items-center mb-6 mt-12 py-16 px-12 shadow-lg bg-[#2E5E5E] bg-opacity-40">
      <img
        alt="profile"
        src={images.artistAvatar.replace('{w}', '250').replace('{h}', '250')}
        className="w-52 h-52 object-cover shadow-xl shadow-black"
      />
      <div className="ml-8">
        <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
        <h2 className="text-white text-lg font-bold mt-4 hover:text-teal-500 cursor-pointer">
          <Link to={`/artists/${artistHighlights?.data[0]?.id}`}>{artist}</Link>
        </h2>
      </div>
    </div>
  );
};

export default SongDetailsHeaderV2;
