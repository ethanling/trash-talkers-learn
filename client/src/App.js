import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './authentication/Auth';
import PrivateRoute from './authentication/PrivateRoute';
// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
// Components
import Nav from './components/Nav';

const StyledApp = styled.div`
    height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background: #0a0a0a;
    color: #fafafa;
    z-index: 0;
    display: flex;
    flex-direction: column;
`;

function App() {
	return (
        <AuthProvider>
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <StyledApp>
                    <Switch>
                        <PrivateRoute exact path="/search" component={Search} />
                        <PrivateRoute exact path="/library" component={Library} />
                        <PrivateRoute exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/sign-up" component={SignUp} />
                    </Switch>
                    <Nav />
                </StyledApp>
            </Router>
        </AuthProvider>
    );
}

export default App;
