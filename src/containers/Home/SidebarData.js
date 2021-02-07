import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Dashboard from './../Dashboard/Dashboard';
import Currency from './../Currency';
import Exchange from './../Exchange';
import Algorithm from './../Algorithm';
import ExchangeCurrency from './../ExchangeCurrency';
import PriceChannel from './../PriceChannel';
// import AdminOrder from './../AdminOrders';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    exact: true,
    sidebar: () => <div>Dashboard</div>,
    main: () => <Dashboard />,
    icon: <IoIcons.IoIosAlbums />,
    cName: 'nav-text',
  },
  {
    title: 'Currency',
    path: '/currency',
    exact: true,
    sidebar: () => <div>Currency</div>,
    main: () => <Currency />,
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: 'Exchange',
    path: '/exchange',
    exact: true,
    sidebar: () => <div>Exchange</div>,
    main: () => <Exchange />,
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },
  {
    title: 'Algorithm',
    path: '/algorithm',
    exact: true,
    sidebar: () => <div>Algorithm</div>,
    main: () => <Algorithm />,
    icon: <IoIcons.IoIosBook />,
    cName: 'nav-text',
  },
  {
    title: 'Exchange Currency',
    path: '/exchange-currency',
    exact: true,
    sidebar: () => <div>Exchange Currency</div>,
    main: () => <ExchangeCurrency />,
    icon: <IoIcons.IoIosCopy />,
    cName: 'nav-text',
  },
  {
    title: 'Price Channel',
    path: '/price-channel',
    exact: true,
    sidebar: () => <div>Price Channel</div>,
    main: () => <PriceChannel />,
    icon: <IoIcons.IoIosMedical />,
    cName: 'nav-text',
  },
];
