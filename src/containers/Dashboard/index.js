/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { IconContext } from 'react-icons';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
// import { SidebarData } from './SidebarData';
// import PriceChannel from './../PriceChannel/index';
import AdminOrder from './../AdminOrders';

const Dashboard = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

  const routes = [
    {
      path: '/dashboard',
      exact: true,
      sidebar: () => <div>Admin Order</div>,
      main: () => <AdminOrder />,
    },
    // {
    //   path: "/price-channel",
    //   exact: true,
    //   sidebar: () => <div>foo</div>,
    //   main: () => <PriceChannel/>
    // },
  ];

  return (
    <Router>
      <div className="dashboard">
        {/* <IconContext.Provider value={{ color: '#fff' }}> */}
        <div className="navbar">
          <Link to="/dashboard" className="menu-bar">
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

        <div style={{ display: 'flex' }}>
          <div
            className="sidebar-container"
          >
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ margin: '1rem' }}>
                <Link to="/dashboard">Admin Orders</Link>
              </li>

              <li style={{ margin: '1rem' }}>
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
          <div style={{ flex: 1, padding: '10px' }}>
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
