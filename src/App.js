import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>

                <Switch>
                    <Route path='/checkout'>
                        <Checkout/>
                    </Route>

                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
