import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <form className="w-2/3 mx-auto mt-24" autoComplete="off">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FiSearch className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          name="default-search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="default-search"
          className="block active:ring-1 focus:ring-1 ring-teal-800 w-full p-4 pl-10 text-sm text-white border border-black rounded-lg bg-black bg-opacity-50 placeholder-gray-400 outline-none"
          placeholder="Search for songs..."
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white absolute right-2.5 bottom-2.5 bg-black hover:bg-opacity-50 focus:ring-1 focus:outline-none focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
