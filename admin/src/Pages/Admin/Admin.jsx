import React from 'react'
import './Admin.css'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { Routes,Route, } from 'react-router-dom'
import Addproduct from '../../Component/Addproduct/Addproduct'
import Listproduct from '../../Component/Listproduct/Listproduct'
const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
          <Route path='/addproduct' element={<Addproduct />}/>
          <Route path='/listproduct' element={<Listproduct />}/>
        </Routes>
    </div>
  )
}

export default Admin
