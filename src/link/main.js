import React from 'react';
import { Switch , Route } from 'react-router-dom';
import data from './biodata';
import con from './contac';
import ahli from './keahlian';

const main = () =>(
    <Switch>
        <Route exact path="/" component={data} />
        <Route path="/contac" component={con} />
        <Route path="/keahlian" component={ahli} />
    </Switch>
)
export default main;