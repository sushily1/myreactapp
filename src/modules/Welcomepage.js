import React from 'react'
import { RiDashboard3Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { myapp } from './controls/apmenu';

function Welcomepage() {
    return (
        <div className="container">
            <div className="text-center py-4">
                <h3>Application List</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 p-3">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search" />
                        <button
                            className="btn btn-outline-info"
                            type="button" >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                {myapp.map((d,x) => {
                    return (
                        <div className="col-6 col-md-3" key={x}>
                            <Link to={"/"+d.approute} className="card text-center p-4 text-decoration-none shadow mt-4">
                                <h1 className='text-info'>
                                    <RiDashboard3Fill />
                                </h1>
                                <h5>{d.appmenu}</h5>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Welcomepage;
