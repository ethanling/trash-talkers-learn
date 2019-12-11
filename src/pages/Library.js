import React, { useEffect } from 'react';
// import styled from 'styled-components'
import Header from '../components/Header'
// Styles
import { StyledPageContainer } from '../styles/Global'

const Library = () => {

	useEffect(() => {
		window.scrollTo(0,0);
	}, []);

	return (
		<StyledPageContainer>
			<Header title="Library" />
		</StyledPageContainer>
	)
}

export default Library;
