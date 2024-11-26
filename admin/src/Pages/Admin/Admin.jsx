import React from 'react';
import './Admin.css';

import Sidebar from '../../Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct'; // Import ListProduct

const Admin = () => {   
    return (
        <div className='admin'>
            <Sidebar /> 
          <AddProduct/>
        
                {/* <Route path='/addproduct' element={<AddProduct />} /> */}
                {/* <Route path='/listproduct' element={<ListProduct />} /> */}
            
        </div>
    );
};

export default Admin;
