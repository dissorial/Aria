import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSongDetailsV2Query } from '../redux/services/shazamCore';
import SongDetailsV2 from './SongDetailsV2';
import { Loader } from '../components';

const SongDetailsContainerV2 = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsV2Query({ songid });

  if (isFetchingSongDetails) return <Loader title="Loading song details" />;

  return <SongDetailsV2 songData={songData} />;
};

export default SongDetailsContainerV2;
