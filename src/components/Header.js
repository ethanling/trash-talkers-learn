import React from 'react';
import styled from 'styled-components';
import { FiSettings } from 'react-icons/fi'

const StyledHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	font-weight: bold;
`;

const StyledSettingsIcon = styled.div`
	font-size: 1.5em;
`;

const StyledTitle = styled.h1`
	font-size: 2em;
	flex: 1;
	padding: 0;
	margin: 0;
`;

const Header = ({ title  }) => {
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
