import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom'

//pages
import LoginPage from './Pages/LoginPage';
import LocationPage from './Pages/LocationPage';
import IndexPage from './Pages/IndexPage';

//layouts
import IndexLayout from './Layout/IndexLayout';

function App() {
  return (
    <>
      <Routes >
        <Route path='/RentCartLogin' element={< LoginPage />} />
        <Route path='/LocationPermission' element={<LocationPage />} />
        <Route path='/RentCart' element={<IndexLayout />} >
          < Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
