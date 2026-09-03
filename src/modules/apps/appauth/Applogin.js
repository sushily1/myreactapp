import React, { useState } from "react";

function Applogin() {
 
     // let a ="username";
    // let pass="password";

    // const changefun=()=>{
    //     alert("welcome");
    //     pass="text";
    //     a="enter user";
    // }
    const [a, b] = useState("");
    const [x, y] = useState("");
    const [abcd, updateabcd] = useState("none");
    const [bg, updatebg] = useState("lightgray");

    const xyz = () => {
        if (abcd === "none") {
            updateabcd("block");
            updatebg("red");
        } else {
            updateabcd("none");
            updatebg("lightgray");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow">
                        <div
                            className="card-body p-4"
                            style={{
                                width: "400px",
                                borderRadius: "15px",
                                backgroundColor: bg
                            }}
                        >
                            <h2 className="text-center mb-4">
                                App Login
                            </h2>

                            <div className="mb-3">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>

                                <input
                                    type="text"
                                    id="username"
                                    className="form-control"
                                    placeholder="Enter username"
                                    value={a}
                                    onChange={(e) => b(e.target.value)}
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>

                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={x}
                                    onChange={(e) => y(e.target.value)}
                                    style={{ display: abcd }}
                                />
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={xyz}
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                className="btn btn-success mt-2 w-100"
                                onClick={xyz}
                            >
                                Show/Hide
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Applogin;
