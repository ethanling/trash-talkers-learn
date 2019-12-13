import React, { useCallback, useContext } from "react";
import styled from 'styled-components';
import { withRouter, Redirect } from "react-router";
import appAuth from "../authentication/config.js";
import { AuthContext } from "../authentication/Auth.js";
import Header from '../components/Header';
import { StyledPageContainer } from '../styles/Global';
import LoginForm from '../components/LoginForm';

const StyledWrapper = styled.div`
    display: flex;
    max-width: 100vw;
    flex-direction: column;
    justify-content: center;
    margin-top: 2em;
`;

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await appAuth
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <StyledPageContainer>
            <Header title="Log In" />
            <StyledWrapper>
                <LoginForm action={handleLogin} />
            </StyledWrapper>
        </StyledPageContainer>
    );
};

export default withRouter(Login);