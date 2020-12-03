import React from "react";
import Hero from "../../components/hero/Hero";
import SectionRow from "../../components/section-row/SectionRow";
import uuid from "react-uuid";

const Main = ({ data, blur, setBlur }) => {
    const allLabels = data.feed.entry.map((elem) => {
        return elem.category.attributes.label;
    });

    const uniqueLabels = allLabels.filter((c, i) => {
        return allLabels.indexOf(c) === i;
    });

    const moviesByLabel = (label) => {
        return data.feed.entry.filter((movie) => {
            return movie.category.attributes.label === label;
        });
    };

    const sectionRows = uniqueLabels.map((label) => {
        return (
            <SectionRow
                label={label}
                key={uuid()}
                labelMovies={moviesByLabel(label)}
                setBlur={setBlur}
            />
        );
    });

    const mainTitle = "Best movies";
    const mainDescription =
        "Watch best movies in best prices, always and everywhere";
    let className = "";
    if (blur) className = "blured";
    return (
        <div className={className}>
            <Hero title={mainTitle} description={mainDescription} />
            {sectionRows}
        </div>
    );
};

export default Main;
