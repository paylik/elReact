import React from "react";
import {Route, Switch} from 'react-router-dom';
import {HomePage, AboutPage, CardPage} from '../pages';
import Header from "../header";
import './app.css';
import Footer from "../footer";

const App = () => {
    return (
        <div className="bg">
            <main role="main" className="container">
                <Header/>
                <div className="tab-content" id="nav-tabContent">
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
                </div>
                <Footer />
            </main>
        </div>
    )
};

export default App;
