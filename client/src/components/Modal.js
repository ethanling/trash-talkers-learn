import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Modal = ({ children, toggle, action }) => {
    const fade = useSpring({
        opacity: toggle ? ('1') : ('0')
    })

    const growHeight = useSpring({
        height: toggle ? "180px" : "0px",
        paddingTop: toggle ? '30px' : '0px'
    });

    const StyledWrapper = styled.div`
        z-index: 8;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 1;
        height: 100vh;
        display: ${toggle ? 'flex': 'none'};
    `;

    const StyledShade = styled(animated.div)`
        width: 100%;
        flex: 1;
        background: rgba(0, 0, 0, .9);
    `;

    const StyledModalWrapper = styled(animated.div)`
        z-index: 9;
        width: 100vw;
        background-color: #1c1c1c;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        border-top: 1px solid #000;
    `;
	


    return (
        <StyledWrapper>
            <StyledShade onClick={action} style={fade} />
            <StyledModalWrapper style={growHeight}>
                {children}
            </StyledModalWrapper>
        </StyledWrapper>
    );
}

export default Modal;
