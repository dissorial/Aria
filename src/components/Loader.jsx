import { Typography } from '@mui/material';
import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <Typography variant="h4" className="font-bold text-white" gutterBottom>
      {title || 'Loading...'}
    </Typography>
  </div>
);

export default Loader;
