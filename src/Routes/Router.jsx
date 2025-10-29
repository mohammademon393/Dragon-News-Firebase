import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

    const router = createBrowserRouter([
      {
        path: "/",
        Component: HomeLayout,
        children: [
          {
            path: "/",
            Component: Home,
          },
          {
            path: "/category/:id",
            Component: CategoryNews,
            loader: ()=> fetch('/news.json'),
          },
        ],
      },
      {
        path: "/auth",
        element: <div>Authentication Layout</div>,
        children: [
          {
            path: '/auth/login',
            Component: Login,
          },
          {
            path: '/auth/register',
            Component: Register,
          },
        ]
      },
      {
        path: "/news",
        element: <div>News Layout</div>,
      },
      {
        path: "/*",
        element: <div>Error 404 data not found</div>,
      },
    ]);


export default router;