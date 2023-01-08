import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div>
    <nav className="lg:hidden absolute z-40 w-full py-6 px-6 ">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="navbar-burger flex items-center rounded focus:outline-none"
        >
          <title>Mobile menu</title>
        </button>
      </div>
    </nav>
    <div className="hidden lg:block navbar-menu relative z-50">
      <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10" />
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-52 sm:max-w-xs pt-6 pb-8 bg-gray-800 overflow-y-auto">
        <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-gray-700" />
        <div className="px-4 pb-6">
          <ul className="mb-8 text-sm font-medium">
            <li>
              <span className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded">
                <Link to="/">Discover</Link>
              </span>
            </li>
            <li>
              <span className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded">
                <Link to="/">item two</Link>
              </span>
            </li>
            <li>
              <span className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded">
                <Link to="/">item three</Link>
              </span>
            </li>
            <li>
              <span className="flex items-center pl-3 py-3 pr-4 text-gray-50 hover:bg-gray-900 rounded">
                <Link to="/">item four</Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="mx-auto lg:ml-52" />
  </div>
);

export default Sidebar;
