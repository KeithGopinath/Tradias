/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import { SidebarData } from './SidebarData';

const Home = () => {
  // const [sidebar, setSidebar] = useState(false);
  // const showSidebar = () => setSidebar(!sidebar);

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
          <div className="sidebar-container">
            <ul style={{ listStyleType: 'none', padding: 0 }}>             
                {SidebarData.map((item) => (
                  <li key={item.id} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                 ))}
            </ul>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              {SidebarData.map((route, index) => (
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

export default Home;
