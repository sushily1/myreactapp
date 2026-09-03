import React from 'react'
import { FcManager } from "react-icons/fc";

function Usermainpage() {
    return (
        <div className='container-fluid mycontainer'>
            <div className='row'>
                <div className='col-md-3'>
                <div className='card-body bg-light'>
                    <div className='card-body'>
                        <h5 className='card-title'><FcManager/>Total Employee</h5>
                        <h3>1200</h3>
                    </div>
                    </div>
                </div>
                       <div className='col-md-3'>
                <div className='card-body bg-light'>
                    <div className='card-body'>
                        <h5 className='card-title'><FcManager/>Male Employee</h5>
                        <h3>800</h3>
                    </div>
                    </div>
                </div>
                       <div className='col-md-3'>
                <div className='card-body bg-light'>
                    <div className='card-body'>
                        <h5 className='card-title'><FcManager/>Female Employee</h5>
                        <h3>395</h3>
                    </div>
                    </div>
                </div>
                       <div className='col-md-3'>
                <div className='card-body bg-light'>
                    <div className='card-body'>
                        <h5 className='card-title'><FcManager/>Transgender Employee</h5>
                        <h3>5</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usermainpage;
