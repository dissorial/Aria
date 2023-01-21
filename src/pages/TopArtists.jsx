import React from 'react';

import { ArtistCard, Error, Loader } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const filteredData = data?.filter((song) => song.images);
  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col pt-6 pb-32 px-6">
      <h1 className="font-bold text-4xl text-white text-center mt-4 mb-10 pl-8">
        Top artists
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredData?.map((track) => (
          <div className="flex m-2" key={track.key}>
            <ArtistCard key={track.key} track={track} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
