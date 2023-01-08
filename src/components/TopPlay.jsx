import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import PlayPause from './PlayPause';
import { setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className="w-full flex items-center bg-black bg-opacity-80 rounded-md p-1
  "
  >
    <div className="w-1/4 p-1">
      <img src={song?.images?.coverart} alt={song?.title} />
    </div>
    <div className="w-1/2 pl-4">
      <p className="font-bold text-white mb-1 truncate text-xl">
        <Link to={`/songs/${song.key}`}>{song?.title}</Link>
      </p>
      <p className="text-gray-400 truncate mt-2 text-lg">
        <Link to={`/artists/${song?.artists[0].adamid}`}>{song?.subtitle}</Link>
      </p>
    </div>
    <div className="w-fit ml-6 flex justify-center cursor-pointer">
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  </div>
);
const TopPlay = () => {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const topPlays = data?.slice(0, 6);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="mb-10">
      <div className="flex justify-between mb-4">
        <p className="text-2xl font-bold text-white">Top Plays</p>
        <Link to="/top-charts">
          <p className="font-bold text-white">See more</p>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-10">
        {topPlays?.map((song, i) => (
          <TopChartCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-2xl font-bold text-white">Top Artists</p>
        <Link to="/top-charts">
          <p className="font-bold text-white">See more</p>
        </Link>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
      >
        {topPlays?.map((artist) => (
          <SwiperSlide
            key={artist?.key}
            style={{ width: '18%', height: 'auto' }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Link to={`/artists/${artist?.artists[0].adamid}`}>
              <img
                src={artist?.images?.background}
                alt="Name"
                className="rounded-full w-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopPlay;
