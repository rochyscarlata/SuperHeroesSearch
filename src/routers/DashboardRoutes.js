import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/Home';
import Header from "../components/ui/Header";
import Heroes from '../components/search/Heroes'
import HeroeView from '../components/search/HeroeView';
import { Footer } from '../components/ui/Footer';

export default function DashboardRoutes ({history}) {
    return (
        <>
        <Header history={history}/>
        <div  style={{height: 'auto'}}>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/heroes" component={Heroes}/>
                <Route exact path="/heroeView/:id" component={HeroeView}/>
                    <Redirect to="/login"/>
            </Switch>
           
        </div>
        
        </>
    )
}
