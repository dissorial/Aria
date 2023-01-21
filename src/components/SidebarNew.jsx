import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineHashtag,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
];

const NavLinks = ({ handleClick }) => (
  <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
    {links.map((item) => (
      <li>
        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
          <NavLink
            key={item.name}
            to={item.to}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </NavLink>
        </div>
      </li>
    ))}
  </ul>
);

const SidebarNew = () => (
  <aside className="" aria-label="Sidenav">
    <div className="md:flex hidden flex-col w-[240px] h-full py-10 px-4 bg-[#110009]">
      <ul className="space-y-2">
        <li>
          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span className="ml-3">Overview</span>
          </div>
        </li>
        <li />
      </ul>
      <NavLinks />
      {/* <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li>
          <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <span className="ml-3">Docs</span>
          </div>
        </li>
      </ul> */}
    </div>
  </aside>
);

export default SidebarNew;
