/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import ViewOne from './components/ViewOne';
import ViewTwo from './components/ViewTwo';
import viewContainer from "./components/ViewContainer";


const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/test/one" />
    },
    // {
    //     path: '/landing',
    //     component: AuthLayout,
    //     routes: [
    //         {
    //             path: '/landing/login',
    //             exact: true,
    //             component: lazy(() => import('views/Login'))
    //         },
    //         {
    //             path: '/landing/register',
    //             exact: true,
    //             component: lazy(() => import('views/Register'))
    //         },
    //         {
    //             component: () => <Redirect to="/errors/error-404" />
    //         }
    //     ]
    // },
    // {
    //     path: '/errors',
    //     component: ErrorLayout,
    //     routes: [
    //         {
    //             path: '/errors/error-401',
    //             exact: true,
    //             component: lazy(() => import('views/Error401'))
    //         },
    //         {
    //             path: '/errors/error-404',
    //             exact: true,
    //             component: lazy(() => import('views/Error404'))
    //         },
    //         {
    //             path: '/errors/error-500',
    //             exact: true,
    //             component: lazy(() => import('views/Error500'))
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