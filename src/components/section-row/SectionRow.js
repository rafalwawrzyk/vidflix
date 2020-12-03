import React from "react";
import Image from "react-bootstrap/Image";
import "./row.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const SectionRow = ({ label, labelMovies, setBlur }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <section className="row-section">
            <h2 className="row-header">{label}</h2>
            <Slider {...settings}>
                {labelMovies.map((movie) => {
                    return (
                        <div className="image-container" key={uuid()}>
                            <Link
                                to={{
                                    pathname:
                                        `/movie/` +
                                        movie.id.attributes["im:id"],
                                    state: { modal: true },
                                }}
                                onClick={() => setBlur(true)}
                            >
                                <Image
                                    src={movie["im:image"]["2"].label}
                                    rounded
                                />
                            </Link>
                            <p className="image-container-title">
                                {movie["im:name"].label}
                            </p>
                        </div>
                    );
                })}
            </Slider>
        </section>
    );
};

export default SectionRow;
