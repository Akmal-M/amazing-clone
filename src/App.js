import React, {useEffect} from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import {auth} from "./Firebase/firebase";
import {useStateValue} from "./State/StateProvider";
import Payment from "./Components/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HxBThCBFb2JbDam3jP1fkPJiGyetPFsOqdQNNRYMW7Ya39v9JXPAGZAbuHcAopMcTSmZ2FNLKwkcnj9AvuwiTM100H7c5atZL');

const App = () => {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        //will only run once when the app component loads..

        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return (
        <Router>
            <div className="App">


                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>

                    <Route path='/checkout'>
                        <Header/>
                        <Checkout/>
                    </Route>

                    <Route path='/payment'>
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>

                    <Route path='/'>
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
