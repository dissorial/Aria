import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/v1/charts/world',
    }),
    getSongDetailsV1: builder.query({
      query: ({ songid }) => `/v1/tracks/details?track_id=${songid}`,
    }),

    getSongRelated: builder.query({
      query: ({ songid }) => `/v1/tracks/related?track_id=${songid}`,
    }),

    getArtistDetails: builder.query({
      query: (artistid) => `/v2/artists/details?artist_id=${artistid}`,
    }),

    getSearchResults: builder.query({
      query: (searchTerm) => `/v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),

    getSongDetailsV2: builder.query({
      query: ({ songid }) => `/v2/tracks/details?track_id=${songid}`,
    }),

    getSongsByGenre: builder.query({
      query: (genre) => `/v1/charts/genre-world?genre_code=${genre}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsV1Query,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetSearchResultsQuery,
  useGetSongDetailsV2Query,
  useGetSongsByGenreQuery,
} = shazamCoreApi;
