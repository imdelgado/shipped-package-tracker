import React from 'react';
import {Switch, Route} from "react-router-dom";
import '../styles/App.css';
import Header from "./Header";
import ShipmentAccordion from "./ShipmentAccordion";
import CreateShipment from './CreateShipment'

const App = () => (
    <div className="center w85">
        <Header/>
        <div className="ph3 pv1 background-gray">
            <Switch>
                <Route exact path="/" component={ShipmentAccordion}/>
                <Route exact path="/create" component={CreateShipment}/>
            </Switch>
        </div>
    </div>
);

export default App;
