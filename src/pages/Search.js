import React, { useEffect } from 'react';
import styled from 'styled-components';
// Components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
// Styles
import { StyledPageContainer } from '../styles/Global';


const Search  = () => {
	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (
		<StyledPageContainer>
			<Header title="Search"/>
            <SearchBar />
            	
		</StyledPageContainer>
	)
}

export default Search;
