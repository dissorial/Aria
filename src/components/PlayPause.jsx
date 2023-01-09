import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  const asd = 'asdasd';
  console.log(activeSong);
  return isPlaying && activeSong?.id === song?.id ? (
    <div className="p-2 bg-black rounded-full bg-opacity-80">
      <PauseIcon
        fontSize="large"
        onClick={handlePause}
        sx={{
          width: '40px',
          height: '40px',
          color: 'white',
        }}
      />
    </div>
  ) : (
    <div className="p-2 bg-black rounded-full bg-opacity-80">
      <PlayArrowIcon
        fontSize="large"
        onClick={handlePlay}
        sx={{
          width: '40px',
          height: '40px',
          color: 'white',
        }}
      />
    </div>
  );
};

export default PlayPause;
