import React from "react";
import Loader from "react-loader-spinner";
import "./loading.scss";

const PageLoader = () => {
    return (
        <div className="overlay">
            <Loader
                type="ThreeDots"
                color="#ab2b57"
                height={100}
                width={100}
                timeout={300000}
            />
        </div>
    );
};

export default PageLoader;
