import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.div`
	min-height: 65px;
	width: 100vw;
	z-index: 10;
	background: #303030;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 7px 0 7px 0;
	align-items: center;
	position: sticky;
	bottom: 0;
	border-top: 1px solid #000;
`;


const Nav = ({ children  }) => {
	return (
		<StyledNav>{ children }</StyledNav>
	)
}

export default Nav;
