/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Landing from './views/Landing';
import ViewOne from './components/ViewOne';
import ViewTwo from './components/ViewTwo';
import viewContainer from "./views/ViewContainer";
import Login from './components/Login';
import Register from './components/Register';


const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/landing/login" />
    },
    {
        path: '/landing',
        component: Landing,
        routes: [
            {
                path: '/landing/login',
                exact: true,
                component: Login
                // component: lazy(() => import('./components/Login'))
            },
            {
                path: '/landing/register',
                exact: true,
                component: Register
                // component: lazy(() => import('./components/Register'))
            },
            {
                component: () => <Redirect to="/errors/error-404" />
            }
        ]
    },
    // {
    //     path: '/errors',
    //     component: ErrorLayout,
    //     routes: [
    //         {
    //             path: '/errors/error-401',
    //             exact: true,
    //             component: lazy(() => import('components/Error401'))
    //         },
    //         {
    //             path: '/errors/error-404',
    //             exact: true,
    //             component: lazy(() => import('components/Error404'))
    //         },
    //         {
    //             path: '/errors/error-500',
    //             exact: true,
    //             component: lazy(() => import('components/Error500'))
    //         },
    //         {
    //             component: () => <Redirect to="/errors/error-404" />
    //         }
    //     ]
    // },
    {
        route: '*',
        component: viewContainer,
        routes: [

            {
                path: '/test/one',
                exact: true,
                component: ViewOne
            },

            {
                path: '/test/two',
                exact: true,
                component: ViewTwo
            },
        ]
    }
]

export default routes;