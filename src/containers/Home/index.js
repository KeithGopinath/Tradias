/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import { SidebarData } from './SidebarData';

const Home = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="home">
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="toggle">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="logout-navig">
            <div className="navigation">
              <a className="bttn" href="">
                <FiIcons.FiLogOut className="logout-img" />
                <div className="logout">LOGOUT</div>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-navig">
          <div className="navigation">
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items">
                {SidebarData.map((item) => (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav >
          </div>
        </div>
      </IconContext.Provider>
    </div >

  );
};

export default Home;
