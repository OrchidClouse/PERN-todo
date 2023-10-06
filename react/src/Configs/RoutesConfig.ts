import React from "react";


export const publicRoutes = [
    {
        key: "login",
        path: `/login`,
        // component: React.lazy(() => import())
    },
    {
        key: "signup",
        path: `/signup`,
        // component: React.lazy(() => import())
    },
    {
        key: "forgot-password",
        path: `/forgot-password`,
        // component: React.lazy(() => import())
    },
]

export const protectedRoutes = [
    {
        key: "main-page",
        path: `/`,
        // component: React.lazy(() => import('Routes/root'))
    },
    {
        key: "create-project",
        path: `/create-project`,
        // component: React.lazy(() => import())
    },
    {
        key: "projects-list",
        path: `/projects-list`,
        // component: React.lazy(() => import())
    },

]