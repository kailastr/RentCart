import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom'

//pages
import LoginPage from './Components/Pages/LoginPage'
import LocationPage from './Components/Pages/LocationPage';
import IndexPage from './Components/Pages/IndexPage';
import ProfilePage from './Components/Pages/ProfilePage';
import AddPage from './Components/Pages/AddPage';
import ProductPage from './Components/Pages/ProductPage';
import ChategoryPage from './Components/Pages/ChategoryPage';
import AdsPage from './Components/Pages/AdsPage';

import PageNotFound from './Components/Pages/PageNotFound';

//layouts
import IndexLayout from './Layout/IndexLayout';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Navigate to='/RentCartLogin' />} />
        <Route path='/RentCartLogin' element={< LoginPage />} />

        <Route path='/LocationPermission' element={<LocationPage />} />

        <Route path='/RentCart' element={<IndexLayout />} >
          < Route index element={<IndexPage />} />
          <Route path='Location' element={<LocationPage />} />
          < Route path='Profile' element={<ProfilePage />} />
          < Route path='AddNewRental' element={<AddPage />} />
          <Route path='Product/:id_' element={<ProductPage />} />
          <Route path=':chategory' element={<ChategoryPage />} />
          <Route path='Ads' element={<AdsPage />} />
        </Route>

        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
