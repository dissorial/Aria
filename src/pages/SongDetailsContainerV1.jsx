import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetSongDetailsV1Query,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';
import SongDetailsV1 from './SongDetailsV1';
import { Loader } from '../components';

const SongDetailsContainerV1 = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsV1Query({ songid });
  const { data } = useGetSongRelatedQuery({ songid });
  if (isFetchingSongDetails) return <Loader title="Loading song details" />;

  return <SongDetailsV1 songData={songData} data={data} />;
};

export default SongDetailsContainerV1;
