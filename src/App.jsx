import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer } from './components';
import {
  ArtistDetails,
  Discover,
  Search,
  TopCharts,
  TopArtists,
  SongDetailsContainerV2,
  SongDetailsContainerV1,
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="flex bg-gradient-to-br from-black to-[#2E5E5E]">
      <Sidebar />
      <main className="flex-1 h-screen overflow-y-scroll hide-scrollbar">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route
            path="/songs/v1/:songid"
            element={<SongDetailsContainerV1 />}
          />
          <Route
            path="/songs/v2/:songid"
            element={<SongDetailsContainerV2 />}
          />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </main>
      {(activeSong?.title || activeSong?.id) && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-[#073f3c] to-black/80 backdrop-blur-lg z-50">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
