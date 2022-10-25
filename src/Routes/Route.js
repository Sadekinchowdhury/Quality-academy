import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laout/Main';
import Blog from '../Pages/Blog/Blog';
import Course from '../Pages/Courses/Course';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'course',
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }


        ]
    }
])