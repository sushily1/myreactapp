import React, { useState } from "react";

function Userlogin() {

   // const [show, setShow]=useState(false);

  return (
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-5 col-lg-4">
                        <div className="card shadow">
                            <div className="card-body p-4">
                                <h2 className="text-center mb-4">Userlogin</h2>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="Enter username"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  );
}

export default Userlogin;
