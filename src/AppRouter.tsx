import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {applyMiddleware, createStore} from 'redux';
import {Provider as StoreProvider} from 'react-redux';

import Home from "./pages/home/Home";
import thunk from "redux-thunk";
import AppReducer from "./redux/AppReducers";
export default function AppRouter(){
    const store = createStore(AppReducer, applyMiddleware(thunk));
    return(
        <StoreProvider store={store}>
            <Router >
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </StoreProvider>

    )
}
