import React, { useCallback, useContext } from "react";
import styled from 'styled-components';
import { withRouter, Redirect } from "react-router";
import appAuth from "../authentication/config.js";
import { AuthContext } from "../authentication/Auth.js";
import Header from '../components/Header';
import { StyledPageContainer } from '../styles/Global';

const StyledWrapper = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    background: #0a0a0a;
    width: 80vw;
    padding-top: 2em;
`;

const StyledLoginForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
            <StyledWrapper>
                <Header title="Log In" />
                <StyledLoginForm onSubmit={handleLogin}>
                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                    </label>
                    <button type="submit">Log in</button>
                </StyledLoginForm>
            </StyledWrapper>
        </StyledPageContainer>
    );
};

export default withRouter(Login);