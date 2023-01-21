import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SongCard, Error, Loader } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector(
    (state) => state.player,
  );

  const [activeGenre, setActiveGenre] = useState(genreListId || 'ELECTRONIC');

  const {
    data: topChartsData,
    isFetching,
    error,
  } = useGetSongsByGenreQuery(genreListId || 'ELECTRONIC');
  if (isFetching) return <Loader title="Loading songs" />;
  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;
  const data = topChartsData.filter(
    (song) => song.images && song.images.coverart,
  );

  return (
    <section className="flex flex-col py-12 px-6">
      {/* <TopPlay /> */}
      {/* Discover and selectbox start */}
      <div className="flex flex-col mb-10 mx-auto items-center">
        <h1 className="text-4xl font-bold text-white mb-5">
          Discover {genreTitle}
        </h1>
        <div className="flex flex-wrap justify-center">
          {genres.map((genre) => (
            <button
              type="button"
              key={genre.value}
              className={`bg-black px-4 py-2 text-white rounded-md mr-2 mb-2 hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-0 ${
                activeGenre === genre.value ? 'bg-gray-700' : ''
              } transition duration-150 ease-in-out`}
              onClick={(e) => {
                setActiveGenre(e.target.value);
                dispatch(selectGenreListId(e.target.value));
              }}
              value={genre.value}
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
