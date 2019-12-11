import React from 'react';
import styled from 'styled-components';

const StyledShade = styled.div`
    z-index: 8;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, .85);
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const StyledModalWrapper = styled.div`
    z-index: 9;
    width: 100vw;
    background-color: #1c1c1c;
    box-shadow; 0 0 10px 0 #000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 0 100px 0;
    border-top: 1px solid #000;
`;

const Modal = ({ children, toggle }) => {
    return (
        <StyledShade onClick={toggle}>
            <StyledModalWrapper>
                { children }
            </StyledModalWrapper>
        </StyledShade>
    )
}

export default Modal;