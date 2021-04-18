import React from "react";
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, CardPage } from '../pages';
import Header from "../header";
import './app.css';

const App = () => {
    return (
        <main role="main" className="container">
            <Header numItems={15} total={200} />
        <Switch>
            <Route
                path="/"
                component={HomePage}
                exact
            />
            <Route
                path="/about"
                component={AboutPage}
            />
            <Route
                path="/card"
                component={CardPage}
        />

        </Switch>
        </main>
    )
};

export default App;
