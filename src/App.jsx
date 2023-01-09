import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Sidebar, MusicPlayer } from './components';
import { ArtistDetails, Discover, SongDetails } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="flex bg-gradient-to-br from-black to-[#121286]">
      <Sidebar />

      <main className="flex-1 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar">
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
        </Routes>
      </main>
      {activeSong && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-50">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
