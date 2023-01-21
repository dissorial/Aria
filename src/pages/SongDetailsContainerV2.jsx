import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetSongDetailsV2Query,
  useGetSongRelatedQuery,
} from '../redux/services/shazamCore';
import SongDetailsV2 from './SongDetailsV2';
import { Error, Loader } from '../components';

const getV2trackId = (data) => {
  const relatedTracksObject = Object.values(
    data?.resources['related-tracks'],
  )[0].id;
  const splitObject = relatedTracksObject.split('-');
  const trackId = splitObject[splitObject.length - 1];
  return trackId;
};
const SongDetailsContainerV2 = () => {
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsV2Query({ songid });
  const trackId = songData && getV2trackId(songData);
  const {
    data: relatedSongs,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid: trackId });

  if (isFetchingSongDetails) return <Loader title="Loading song details" />;

  return <SongDetailsV2 songData={songData} relatedSongs={relatedSongs} />;
};

export default SongDetailsContainerV2;
