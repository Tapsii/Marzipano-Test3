import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Navbar = () => {
   
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top px-3">
            <div className="btn-group" role="group">
                <button className="btn btn-outline-light">
                    ⛶
                </button>
                <button className="btn btn-outline-light" >
                    ⏸
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
