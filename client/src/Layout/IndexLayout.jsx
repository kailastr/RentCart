import React from 'react';

import { Outlet } from 'react-router-dom';

import IndexNavbar from '../Components/Navbar/IndexNavbar'
import IndexBottomNav from '../Components/Navbar/IndexBottomNav'

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