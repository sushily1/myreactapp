import React from 'react'
import Lifesy from '../features/Lifesy';
import Appheader from '../sharecomonents/Appheader';
import Appsidebar from '../sharecomonents/Appsidebar';
import Userlogin from '../users/auth/Userlogin';
import Usermainpage from '../users/components/Usermainpage';
import Appfooter from '../sharecomonents/Appfooter';
import { Outlet } from 'react-router-dom';
import UserDetails from '../features/UserDetails';

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
            <UserDetails/>
            <Appfooter />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landingpage;
