import React from 'react';

import { Outlet } from 'react-router-dom';

import IndexNavbar from '../Navbar/IndexNavbar';
import IndexBottomNav from '../Navbar/IndexBottomNav';

const DefaultLayout = () => {
    return (
        <>
            <IndexNavbar />
            <Outlet />
            <IndexBottomNav />
        </>
    )
}

export default DefaultLayout