import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlineHashtag,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { logo } from '../assets';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        end
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-teal-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-black/50">
        <img src={logo} alt="logo" className="w-full h-10 object-contain" />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div
        className="absolute md:hidden bg-black/80 p-4 w-full
        flex flex-row justify-end items-center
      "
      >
        <img src={logo} alt="logo" className="w-full h-8 object-contain" />
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-8 h-8 mr-2 text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-8 h-8  mr-2 text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-teal-900 to-black/80 backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
