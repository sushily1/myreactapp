import React from 'react'
import Appheader from '../sharecomonents/Appheader';
import Appsidebar from '../sharecomonents/Appsidebar';
import Appfooter from '../sharecomonents/Appfooter';
import { Outlet } from 'react-router-dom';
function Landingpage() {
  return (
    <div>
      <Appheader />

      <div className='container-fluid cmt'>
        <div className='row'>
          <div className='col-md-2'>
            <Appsidebar />
          </div>
          <div className='col-md-10 border'>
            <Outlet></Outlet>
            <Appfooter />
          </div> 
        </div>
      </div>
    </div>
  )
}
export default Landingpage;
