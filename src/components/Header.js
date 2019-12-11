import React from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi'

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    font-weight: bold;
    padding: 1.5em 1em 8em 1em;
    background: #0a0a0a;
    background: linear-gradient(
        180deg,
        rgba(73, 73, 73, 1) 0%,
        rgba(10, 10, 10, 1) 72%
    );
    margin-bottom: -8.5em;
`;

const StyledSettingsIcon = styled.div`
	font-size: 1.5em;
`;

const StyledTitle = styled.h1`
	font-size: 2em;
	flex: 1;
	padding: 0;
	margin: 0;
    background: none;
`;

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<StyledTitle>{ title }</StyledTitle>
			<StyledSettingsIcon>		
				<FiSettings />	
			</StyledSettingsIcon>
		</StyledHeader>
	)
}

export default Header;
