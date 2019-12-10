import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	padding-top: 1em;
`;

const StyledScrollTitle = styled.h2`
	font-size: .85em;
	text-transform: uppercase;
`;

const StyledScrollView = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	padding: 0 0 1em 0;
	-webkit-overflow-scrolling: touch;
`;

const StyledCard = styled.div`
	display: inline-block;
	height: 200px;
	width: 200px;
	background-color: #303030;
	margin: 0 2em 0 0;
`;

//const StyledCard

const Card = (arr) => {
	return (
		arr ? (
			''
		) : ('')
	)
}

const ScrollView = () => {
	return (
		<StyledWrapper>
			<StyledScrollTitle>
				Recently Added
			</StyledScrollTitle>
			<StyledScrollView>
				<StyledCard>one</StyledCard>
				<StyledCard>two</StyledCard>
				<StyledCard>three</StyledCard>
				<StyledCard>four</StyledCard>
				<StyledCard>five</StyledCard>
				<StyledCard>six</StyledCard>
			</StyledScrollView>		
		</StyledWrapper>
	)
}

export default ScrollView;
