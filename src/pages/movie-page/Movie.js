import React, { useEffect } from "react";
import "./movie.scss";
import { withRouter } from "react-router";
import Modal from "../../components/modal/Modal";

const Movie = ({ match, data, setBlur }) => {
    useEffect(() => {
        setBlur(true);
        return () => {
            setBlur(false);
        };
    }, []);
    const movieId = match.params.id;
    const matchedMovieArr = data.feed.entry.filter((movie) => {
        return movie.id.attributes["im:id"] === movieId;
    });
    const matchedMovie = matchedMovieArr[0];
    return <Modal matchedMovie={matchedMovie} />;
};

export default withRouter(Movie);
