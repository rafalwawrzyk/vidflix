import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h2 className="">404 Page not existing</h2>
            <Link to="/">Go back to main page</Link>
        </div>
    );
};

export default NotFound;
