import React, { useState, useEffect } from "react";
import "./search.scss";
import Hero from "../../components/hero/Hero";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const Search = ({ data }) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const onSearchChange = (e) => {
        setSearchValue((currValue) => e.target.value);
        const results = data.feed.entry.filter((movie) => {
            return movie.title.label.toLowerCase().includes(searchValue);
        });
        setSearchResults(results);
    };

    useEffect(() => {
        if (searchValue === "") {
            setSearchResults([]);
        }
    }, [searchValue]);

    return (
        <>
            <Hero>
                <div className="movie-search-container">
                    <h2>Search: </h2>
                    <div className="movie-search-input-container">
                        <input
                            placeholder="Search movies"
                            value={searchValue}
                            type="text"
                            onChange={onSearchChange}
                        />
                    </div>
                </div>
            </Hero>
            <ul className="movie-search-list">
                {searchResults.map((movie) => {
                    return (
                        <li key={uuid()}>
                            <Link to={`/movie/` + movie.id.attributes["im:id"]}>
                                <Image
                                    src={movie["im:image"]["2"].label}
                                    rounded
                                />
                                <p>{movie["im:name"].label}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Search;
