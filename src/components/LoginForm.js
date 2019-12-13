import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
    
`;

const StyledRow = styled.div`
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    padding: 0 2.25em 0 2.25em;
`;

const StyledInput = styled.input`
    background-color: #fafafa;
    border: none;
    font-size: 1.25em;
    outline: none;
    border-radius: 8px;
    font-weight: bold;
    padding: 12px 16px 12px 16px;
`;

const StyledLabel = styled.label`
    display: block;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1em;
`;

const StyledButton = styled.button``;

const LoginForm = ({ action }) => {
    return (
        <StyledLoginForm onSubmit={action}>
            <StyledRow>
                <StyledLabel>Email</StyledLabel>
                <StyledInput name="email" type="email" placeholder="me@example.com" />
            </StyledRow>
            <StyledRow>
                <StyledLabel>Password</StyledLabel>
                <StyledInput name="password" type="password" placeholder="password" />
            </StyledRow>
            <button type="submit">Log in</button>
        </StyledLoginForm>
    );
};

export default LoginForm;