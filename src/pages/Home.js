import React from 'react';
// import styled from 'styled-components';
import Header from '../components/Header';
import ScrollView from '../components/ScrollView'
import { StyledPageContainer } from '../styles/Global';

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

// TODO
// Fetch methods for content from API to be used in the ScrollViews

const Home = () => {

	return (
		<StyledPageContainer>
			<Header title="Home" />
			<ScrollView team="gold" contentArr={testArr} />
			<ScrollView team="green" contentArr={testArr} />
		</StyledPageContainer>
	)
}

export default Home;
