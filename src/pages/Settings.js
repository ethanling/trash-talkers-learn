import React from 'react';
import styled from 'styled-components';
import Modal from '../components/Modal';
import appAuth from '../authentication/config.js'

const StyledButton = styled.button`
    background: none;
    font-size: 1em;
    font-weight: bold;
    padding: 10px 20px 10px 20px;
    color: #fafafa;
    border: 4px solid #fafafa;
    border-radius: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.2s ease;

    :hover {
        box-shadow: 0 0 10px 0 #000;
        transform: scale(1.03);
    }
`;

const Settings = ({ toggle }) => {


    return (
        <Modal toggle={toggle}>
            <StyledButton onClick={() => appAuth.auth().signOut()}>
                Sign Out
            </StyledButton>
        </Modal>
    );
}

export default Settings;