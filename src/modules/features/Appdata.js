import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Appdata() {
    const { id } = useParams();

    const [sv, sf] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`)
            .then((r) => r.json())
            .then((d) => {
                console.log("API DATA:", d);
                sf(d);
            })
            .catch((err) => {
                console.log("ERROR:", err);
            });
    }, [id]);

    return (
        <div className="container-fluid min-vh-100 py-5 bg-secondary">

            <div className="container">

                <div className="row justify-content-center">

                    {sv && (
                        <div className="col-12 col-sm-10 col-md-8 col-lg-5">

                            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                                <div className="text-center bg-primary p-4">
                                    <img
                                        src={sv.image}
                                        alt={sv.username}
                                        className="img-fluid rounded-circle border border-4 border-white"
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>

                                <div className="card-body p-4">

                                    <h3 className="text-center text-primary mb-4">
                                        {sv.firstName} {sv.lastName}
                                    </h3>

                                    <div className="row g-3">

                                        <div className="col-6">
                                            <div className="bg-light shadow-sm rounded-3 p-3">
                                                <small className="text-muted">
                                                    Username
                                                </small>
                                                <h6 className="mb-0">
                                                    {sv.username}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <div className="bg-light shadow-sm rounded-3 p-3">
                                                <small className="text-muted">
                                                    Age
                                                </small>
                                                <h6 className="mb-0">
                                                    {sv.age}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bg-light shadow-sm rounded-3 p-3">
                                                <small className="text-muted">
                                                    Email
                                                </small>
                                                <h6 className="mb-0">
                                                    {sv.email}
                                                </h6>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="bg-light shadow-sm rounded-3 p-3">
                                                <small className="text-muted">
                                                    Phone
                                                </small>
                                                <h6 className="mb-0">
                                                    {sv.phone}
                                                </h6>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="text-center mt-4">
                                        <Link
                                            to="/"
                                            className="btn btn-success px-4"
                                        >
                                            Back
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Appdata;
