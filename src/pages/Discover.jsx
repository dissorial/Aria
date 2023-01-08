import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SongCard, Error, Loader, TopPlay } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  console.log(data)
  if (isFetching) return <Loader />;
  if (error) return <Error />;

  return (
    <section className="flex flex-col py-24 px-6">
      <TopPlay />
      {/* Discover and selectbox start */}
      <div className="flex flex-col mb-10 mx-auto items-center">
        <h1 className="text-4xl font-bold text-white mb-5">Discover</h1>
        <div className="flex flex-wrap justify-center">
          {genres.map((genre) => (
            <button
              type="button"
              key={genre.value}
              value={genre.value}
              className="bg-black px-4 py-2 text-white rounded-md mr-2 mb-2 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-0 active:bg-gray-900 transition duration-150 ease-in-out
              "
            >
              {genre.title}
            </button>
          ))}
        </div>
      </div>
      {/* Discover and selectbox end */}
      {/* Song cards start */}
      <div className="w-full flex flex-wrap">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={index}
          />
        ))}
      </div>
      {/* Song cards end */}
    </section>
  );
};

export default Discover;
