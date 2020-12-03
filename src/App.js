import "./App.css";
import Navigation from "./components/nav/Nav";
import { Layout } from "./components/layout/Layout";
import Main from "./pages/main-page/Main";
import Movie from "./pages/movie-page/Movie";
import Search from "./pages/search-page/Search";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import Loading from "./components/loading/Loading";
import NotFound from "./pages/not-found-page/NotFound";

function App() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [blur, setBlur] = useState(false);
    const [previousLocation, setPreviousLocation] = useState(null);
    let location = useLocation();

    useEffect(() => {
        axios
            .get("https://itunes.apple.com/us/rss/topmovies/limit=100/json")
            .then((res) => {
                setData(res);
            })
            .catch((e) => {
                setError(e);
            });
    }, []);

    useEffect(() => {
        if (!(location.state && location.state.modal)) {
            setPreviousLocation(location);
        }
    });

    const isModal =
        location.state && location.state.modal && previousLocation !== location;

    return (
        <div className="App">
            <Layout>
                <Navigation blur={blur} />
                <Switch location={isModal ? previousLocation : location}>
                    <Route exact path="/">
                        {!data ? (
                            <Loading />
                        ) : (
                            <Main
                                data={data.data}
                                blur={blur}
                                setBlur={setBlur}
                            />
                        )}
                    </Route>
                    <Route exact path="/search">
                        {!data ? <Loading /> : <Search data={data.data} />}
                    </Route>
                    <Route exact path="/movie/:id">
                        {!data ? (
                            <p>Loading...</p>
                        ) : (
                            <Movie data={data.data} setBlur={setBlur} />
                        )}
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
                {isModal ? (
                    <Route exact path="/movie/:id">
                        {" "}
                        {!data ? (
                            <p></p>
                        ) : (
                            <Movie data={data.data} setBlur={setBlur} isModal />
                        )}
                    </Route>
                ) : null}
            </Layout>
        </div>
    );
}

export default App;
