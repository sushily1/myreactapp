
import React from 'react'
import UserDetails from '../../features/UserDetails';
function Appmainpage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='card bg-danger border shadow'>
                        <div className='card-body'>
                            <h5 className='card-title'>card title</h5>
                           <UserDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Appmainpage;