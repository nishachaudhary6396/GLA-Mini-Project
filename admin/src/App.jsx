import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';

const App = () => {
    return (
        <BrowserRouter>
          
                <Navbar />
                <Admin />
           
        </BrowserRouter>
    );
};

export default App;
