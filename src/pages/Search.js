import React from 'react';
import styled from 'styled-components';
// Components
import Header from '../components/Header'
import SearchBar from '../components/SearchBar';
// Styles
import { StyledPageContainer } from '../styles/Global';


const Search  = () => {
	return (
		<StyledPageContainer>
			<Header title="Search"/>
            <SearchBar />
            	
		</StyledPageContainer>
	)
}

export default Search;
