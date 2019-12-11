import React from 'react';
import styled from 'styled-components';

const testArr = [
    {
        title: "Video 1",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 2",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 3",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 4",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 5",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 6",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    },
    {
        title: "Video 7",
        desciption: "A cool video that is cool.",
        thumbnail_link: "https://via.placeholder.com/200"
    }
];


const StyledWrapper = styled.div`
	padding: 1em 0 0 0;
`;

const StyledScrollTitle = styled.h2`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: .85em;
	text-transform: uppercase;
    padding-left: 1em;
`;

const StyledScrollView = styled.div`
	overflow-x: scroll;
	overflow-y: hidden;
	white-space: nowrap;
	/* padding: 0 0 1em 0; */
    padding: 1em;
	-webkit-overflow-scrolling: touch;
`;

const StyledCard = styled.div`
	display: inline-block;
    justify-content: center;
    align-items: center;
	width: 200px;
	margin: 0 1em 0 0;
`;

const StyledCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledCardImg = styled.img`
    box-shadow: 0 0 15px 0px #000;	
`;

const StyledCardTitle = styled.h3`
    margin: .5em 0 .5em 0;
    padding: 0;
    font-size: 1em;
`;

const StyledCardDescription = styled.p`
    margin: 0;
    padding: 0;
	font-size: 0.8em;
	flex: 1;
`;

const Card = ({ title, description, thumbnail_link }) => {
	return (
        <StyledCard>
            <StyledCardWrapper>
				<StyledCardImg src={thumbnail_link} alt={title} />
                <StyledCardTitle>{title}</StyledCardTitle>
                <StyledCardDescription>{description}</StyledCardDescription>
            </StyledCardWrapper>
        </StyledCard>
    );
}

const ScrollView = ({ videos, team }) => {

	const StyledTeamLabel = styled.span`
		font-size: .7em;
		${team === 'gold' ? ('background-color: yellow;') : ('background-color: green;')}
		padding: 5px 8px 5px 8px;	
		margin-left: 1em;
		border-radius: 4px;
		color: #1d1d1d;
		font-weight: bold;
	`;

	return (
		<StyledWrapper>
			<StyledScrollTitle>
				Recently Added
				{ team === 'gold' ? (
					<StyledTeamLabel>Gold Team</StyledTeamLabel>		
				) : (
					<StyledTeamLabel>Green Team</StyledTeamLabel>
				)}
			</StyledScrollTitle>
			<StyledScrollView>
                { testArr.map(card => (
                    <Card title={card.title} description={card.desciption} thumbnail_link={card.thumbnail_link} />
                ))}
			</StyledScrollView>		
		</StyledWrapper>
	)
}

export default ScrollView;
