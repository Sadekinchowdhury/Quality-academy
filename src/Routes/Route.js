import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laout/Main';
import Blog from '../Pages/Blog/Blog';
import Details from '../Pages/Courses/Card/Details/Details';
import Category from '../Pages/Courses/category/Category';
import Checkout from '../Pages/Courses/Checkout/CheckOut';


import Course from '../Pages/Courses/Course';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivetRoute from '../PrivetRout/PrivetRout';
import Wrong from '../Wrong/Wrong';


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
                path: '/course',
                loader: () => fetch('https://quality-server-sadekinchowdhury.vercel.app/course'),
                element: <Course></Course>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://quality-server-sadekinchowdhury.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://quality-server-sadekinchowdhury.vercel.app/course/${params.id}`),
                element: <Details></Details>
            }, {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://quality-server-sadekinchowdhury.vercel.app/course/${params.id}`),
                element: <PrivetRoute><Checkout></Checkout></PrivetRoute>
            }, {
                path: '/*',
                element: <Wrong></Wrong>
            }



        ]
    }
])