import React from 'react';

import { Outlet } from 'react-router-dom';

import IndexNavbar from '../Navbar/IndexNavbar';

const DefaultLayout = () => {
    return (
        <>
        <IndexNavbar />
        <Outlet />
        </>
    )
}

export default DefaultLayout