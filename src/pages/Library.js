import React, { useEffect } from 'react';
// import styled from 'styled-components'
import Header from '../components/Header'
import ListView from '../components/ListView'
// Styles
import { StyledPageContainer } from '../styles/Global'

const Library = () => {

	useEffect(() => {
		window.scrollTo(0,0);
    }, []);
    
    const testArr = [
        {
            title: "Fresh Trash",
            videos: {
                one: "",
                two: "",
                bass: ""
            },
            sheetMusic: ""
        },
        {
            title: "Bucket Brigade",
            videos: {
                one: "",
                two: "",
                bass: ""
            },
            sheetMusic: ""
        },
        {
            title: "The Funk",
            videos: {
                one: "",
                two: "",
                bass: ""
            },
            sheetMusic: ""
        }
    ];

	return (
		<StyledPageContainer>
			<Header title="Library" />
            <ListView config={testArr} />
		</StyledPageContainer>
	)
}

export default Library;
