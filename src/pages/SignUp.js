import React from 'react';
import styled from 'styled-components';
// Components
import Header from '../components/Header'
// Styles
import { StyledPageContainer } from '../styles/Global';

const StyledWrapper = styled.div``;

const SignUp = () => {
    return (
        <StyledPageContainer>
            <Header title="Sign Up" />
            <StyledWrapper>
                Sign Up
            </StyledWrapper>
        </StyledPageContainer>
    );
};

export default SignUp;