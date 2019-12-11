import React from 'react';
// import styled from 'styled-components';
import Header from '../components/Header';
import ScrollView from '../components/ScrollView'
import { StyledPageContainer } from '../styles/Global';


const Home = () => {

	return (
		<StyledPageContainer>
			<Header title="Home" />
			<ScrollView team="gold"/>
			<ScrollView team="green"/>
		</StyledPageContainer>
	)
}

export default Home;
