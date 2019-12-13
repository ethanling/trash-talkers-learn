import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    z-index: 8;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const StyledShade = styled.div`
    width: 100%;
    flex: 1;
    background: rgba(0, 0, 0, .9);
`;

const StyledModalWrapper = styled.div`
    z-index: 9;
    width: 100vw;
    background-color: #1c1c1c;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0 100px 0;
    border-top: 1px solid #000;
`;

const Modal = ({ children, toggle }) => {
    return (
        <StyledWrapper>
            <StyledShade onClick={toggle} />
            <StyledModalWrapper>{children}</StyledModalWrapper>
        </StyledWrapper>
    );
}

export default Modal;