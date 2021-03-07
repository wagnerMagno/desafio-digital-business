import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import ContentStyled from './ContentStyled';
import Home from './../home/Home';


const Content = () => {

    return (
        <ContentStyled>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route exact path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Router>
        </ContentStyled>
    );
};

export default Content;
