import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router,Link } from 'react-router-dom';
// Icons
import { FiHome, FiSearch, FiList } from 'react-icons/fi'

const StyledNav = styled.div`
	min-height: 65px;
	width: 100vw;
	z-index: 10;
	background: #1c1c1c;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 7px 0 7px 0;
	align-items: center;
	position: sticky;
	bottom: 0;
	border-top: 1px solid #000;
`;

const StyledLink = styled(Link)`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #fafafa;
    padding: 0.25em 0 0.25em 0;
    margin: 0 15px 0 15px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.15s ease;
    height: 51px;

    :hover {
        cursor: pointer;
        background-color: #303030;
    }
`;

const StyledNavText = styled.span`
    margin-top: 0.25em;
    font-size: 0.5em;
    color: #fafafa;
`;


const Nav = () => {
	return (
        <StyledNav>
            <StyledLink to="/">
                <FiHome />
                <StyledNavText>Home</StyledNavText>
            </StyledLink>
            <StyledLink to="/search">
                <FiSearch />
                <StyledNavText>Search</StyledNavText>
            </StyledLink>
            <StyledLink to="/library">
                <FiList />
                <StyledNavText>Library</StyledNavText>
            </StyledLink>
        </StyledNav>
    );
}

export default Nav;
