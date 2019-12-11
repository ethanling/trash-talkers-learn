import React,  {useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import Library from './pages/Library';
// Components
import Nav from './components/Nav';
// Icons
import { FiHome, FiSearch, FiList } from 'react-icons/fi'

const StyledApp = styled.div`
    height: 100vh;
    min-width: 100vw;
    max-width: 100vw;
    background: #1C1C1C;
    color: #fafafa;
    z-index: 0;
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled(Link)`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.5em;
	color: #fafafa;
	padding: .25em 0 .25em 0;
	margin: 0 15px 0 15px;
	border-radius: 8px;
	text-decoration: none;
	transition: all .15s ease;
	height: 51px;
	
	:hover {
		cursor: pointer;
		background-color: #464646;
	}
`;

const StyledNavText= styled.span`
	margin-top: .25em;
	font-size: .5em;
	color: #fafafa;
`;

function App() {
	return (
		<Router onUpdate={() => window.scrollTo(0,0)}>		
			<StyledApp>
				<Switch>
					<Route path="/search">
						<Search /> 
					</Route>	
					<Route path="/library">
						<Library />
					</Route>	
					<Route path="/">
						<Home />
					</Route>	
				</Switch>

			<Nav>
				<StyledLink to='/'>
					<FiHome />
					<StyledNavText>Home</StyledNavText>
				</StyledLink>	
				<StyledLink to='/search'>
					<FiSearch />
					<StyledNavText>Search</StyledNavText>
				</StyledLink>	
				<StyledLink to='/library'>
					<FiList />
					<StyledNavText>Library</StyledNavText>
				</StyledLink>	
			</Nav>
			</StyledApp>
		</Router>
	);
}

export default App;
