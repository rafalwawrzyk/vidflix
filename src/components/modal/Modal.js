import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { X as CloseIcon } from "@styled-icons/boxicons-regular/X";
import Button from "react-bootstrap/Button";
import "./modal.scss";

const Modal = ({ matchedMovie }) => {
    const html = document.querySelector("html");
    const [muted, setMuted] = useState(true);
    const node = useRef(null);
    const history = useHistory();
    const handleClickOutside = (event) => {
        if (node.current && !node.current.contains(event.target)) {
            history.goBack();
        }
    };

    useEffect(() => {
        html.style.overflowY = "hidden";
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
            html.style.removeProperty("overflow-y");
        };
    }, []);

    return (
        <>
            <CloseIcon size={"2rem"} className="movie-modal-close" />
            <div className="movie-modal-container">
                <div className="movie-modal" ref={node}>
                    <video
                        controls=""
                        loop
                        muted={false}
                        autoPlay
                        name="media"
                        className="movie-modal-trailer"
                    >
                        <source
                            src={matchedMovie.link[1].attributes.href}
                            type="video/x-m4v"
                        />
                    </video>
                    <div className="movie-modal-text">
                        <h2>{matchedMovie["im:name"].label}</h2>
                        <p>
                            <span>Director: </span>
                            {matchedMovie["im:artist"].label}
                        </p>
                        <p>
                            <span>Release Date: </span>
                            {matchedMovie["im:releaseDate"].attributes.label}
                        </p>
                        <p>{matchedMovie.summary.label}</p>
                        <Button
                            href={matchedMovie.link[0].attributes.href}
                            target="_blank"
                            variant="outline-primary"
                        >
                            Buy for {matchedMovie["im:price"].label}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
