import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsList } from 'react-icons/bs';
export const Customnavbar = () => {
  // header component which will act as a common component in all pages
  const [ShowIcon, setShowIcon] = useState(false);
  const NavbarLinks = ({ responsiveClass }) => {
    return (
      <div className={`nav-links ${responsiveClass}`}>
        <NavLink className='link' to='/' onClick={() => setShowIcon(false)}>
          Home
        </NavLink>
        <NavLink className='link' to='/add' onClick={() => setShowIcon(false)}>
          Add
        </NavLink>
        <NavLink className='link' to='/list' onClick={() => setShowIcon(false)}>
          List
        </NavLink>
      </div>
    );
  };
  return (
    <>
      <nav className='navbar'>
        <div className='brand'>Todo</div>
        <NavbarLinks responsiveClass={`${ShowIcon ? 'mobileActive ' : ''}`} />

        <div
          className='menu'
          onClick={() => {
            setShowIcon(!ShowIcon);
          }}
        >
          <BsList />
        </div>
      </nav>
      <Outlet />
    </>
  );
};
