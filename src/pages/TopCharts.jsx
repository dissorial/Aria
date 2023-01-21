import React from 'react';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  const filteredData = data.filter(
    (song) => song.images && song.images.coverart,
  );
  return (
    <div className="flex flex-col py-6 px-6">
      <h1 className="font-bold text-4xl text-white text-center mt-4 mb-10 pl-4">
        Top charts
      </h1>

      <div className="flex flex-wrap w-full">
        {filteredData.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={filteredData}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
