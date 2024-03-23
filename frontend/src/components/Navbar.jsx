import React, { useState } from 'react';
import Connbutton from './Connect';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className='bg-transparent top-0 z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 shadow-2xl'>
      <div className="flex items-center p-3 text-xl justify-between font-mono">
        <Link to='/'>Nutrichoiccccce</Link>
        <ul className='flex justify-center space-x-6'>
          <li>
            <Link
              to='/'
              className={`menu-item ${activeMenu === 'home' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('home')}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/recipe'
              className={`menu-item ${activeMenu === 'search' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('search')}
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to='/take'
              className={`menu-item ${activeMenu === 'take' ? 'active' : ''}`}
              onMouseEnter={() => handleMenuClick('take')}
            >
              Takeaway
            </Link>
          </li>
          
        </ul>
        <Connbutton />
      </div>
    </div>
  );
};

export default Navbar;
