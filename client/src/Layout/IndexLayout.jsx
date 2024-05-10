import React from 'react';

import { Outlet } from 'react-router-dom';

import IndexNavbar from '../Components/Navbar/IndexNavbar'
import IndexBottomNav from '../Components/Navbar/IndexBottomNav'
import IndexFooter from '../Components/Footer/IndexFooter';

const DefaultLayout = () => {
    return (
        <>
            <IndexNavbar />
            <Outlet />
            <IndexFooter />
            <IndexBottomNav />
        </>
    )
}

export default DefaultLayout