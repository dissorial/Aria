import { Link } from 'react-router-dom';

const SongDetailsHeaderV1 = ({ songData }) => {
  const { images, title, subtitle, artists, releasedate, genres } = songData;

  return (
    <div className="flex items-center mb-6 mt-12 py-16 px-12 shadow-lg bg-[#2E5E5E] bg-opacity-40">
      <img
        alt="profile"
        src={images?.coverart}
        className="w-52 h-52 object-cover shadow-xl shadow-black"
      />
      <div className="ml-8">
        <p className="text-white uppercase font-bold mb-4">{genres?.primary}</p>
        <h1 className="text-white text-4xl font-bold mb-4">{title}</h1>

        <div className="flex space-x-2">
          <h2 className="text-white text-lg font-bold hover:text-[#759E9E]">
            <Link to={`/artists/${artists[0].adamid}`}>{subtitle}</Link>
          </h2>
          <span className="text-white">●</span>
          <h2 className="text-white text-lg">{releasedate.slice(-4)}</h2>
        </div>
      </div>
    </div>
  );
};

export default SongDetailsHeaderV1;
