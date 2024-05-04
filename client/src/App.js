import './App.css';

import { Route, Routes } from 'react-router-dom'

//pages
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <>
      <Routes >
        <Route path='/RentCartLogin' element={< LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
