import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom'

//pages
import LoginPage from './Components/Pages/LoginPage'
import LocationPage from './Components/Pages/LocationPage';
import IndexPage from './Components/Pages/IndexPage';
import ProfilePage from './Components/Pages/ProfilePage';
import ProductPage from './Components/Pages/ProductPage';
import ChategoryPage from './Components/Pages/ChategoryPage';

//layouts
import IndexLayout from './Layout/IndexLayout';
import AddPage from './Components/Pages/AddPage';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Navigate to='/RentCartLogin' />} />
        <Route path='/RentCartLogin' element={< LoginPage />} />

        <Route path='/LocationPermission' element={<LocationPage />} />

        <Route path='/RentCart' element={<IndexLayout />} >
          < Route index element={<IndexPage />} />
          < Route path='Profile' element={<ProfilePage />} />
          < Route path='AddNewRental' element={<AddPage />} />
          <Route path='Product/:id_' element={<ProductPage />} />
          <Route path=':chategory' element={<ChategoryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
