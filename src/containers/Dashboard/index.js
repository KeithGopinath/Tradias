/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
import PriceChannel from './../PriceChannel/index'

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const routes = [
    {
      path: "/admin-order",
      exact: true,
      sidebar: () => <div>Admin Order</div>,
      main: () => <h2>Admin Order Content</h2>
    },
    {
      path: "/price-channel",
      exact: true,
      sidebar: () => <div>foo</div>,
      main: () => <h2><PriceChannel/> </h2>
    },

  ];

  return (
    <Router>
    <div className="dashboard">
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className="navbar">
          <Link to="#" className="menu-bar">
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            Logo
          </Link>
          <div className="navigation">
            <a className="bttn" href="">
              <FiIcons.FiLogOut className="logout-img" />
              <div className="logout">LOGOUT</div>
            </a>
          </div>
        </div>

      <div style={{ display: "flex" }}>
        <div
          className="sidebar-container"
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/admin-order">Admin Orders</Link>
            </li>
            
            <li>
              <Link to="/price-channel">Price Order</Link>
            </li>
          </ul>
          {/* <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch> */}
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div >
    </Router>

  );
};

export default Dashboard;
