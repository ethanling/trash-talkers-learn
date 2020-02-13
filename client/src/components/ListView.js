import React, { useState } from 'react'
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 1em;
    margin: 1em 0 0 0;
`;

const StyledListTitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const StyledListTitle = styled.li`
	color: #ccc;
	font-size: 1.4em;
    font-weight: bold;
	margin-bottom: .7em;
    display: inline-block;
    margin-right: 1em;
`;

const StyledListItem = styled.li`
    border-bottom: 1px solid #464646;
    padding: 10px 12px 10px 12px;
    background: #222;
    cursor: pointer;

    :last-child {
        border-bottom: none;
    }
`;

const ListView = ({ config }) => {
    const [currentView, setCurrentView] = useState()
    const [expanded, setExpanded] = useState({indexes: [0, 1]});
    
    const handleExpand = i => {
        let tmp = expanded.indexes;
        console.log(tmp)        
            setExpanded(prevState => ({
                indexes: [...prevState.indexes, i]
            }));
    }

    return (
        <StyledList>
            <StyledListTitleContainer>
                <StyledListTitle style={{}}>Videos</StyledListTitle>
                <StyledListTitle style={{}}>Sheet Music</StyledListTitle>
            </StyledListTitleContainer>
        </StyledList>
    );
}

export default ListView;
