import React from 'react'
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 1em;
    margin: 0;
`;

const StyledListTitle = styled.li`
    font-size: 1.25em;
    text-transform: uppercase;
`;

const StyledListItem = styled.li`
    border-bottom: 1px solid #999;
    padding: 8px 0px 8px 0px;

    :last-child {
        border-bottom: none;
    }
`;

const ListView = () => {
    return (
        <StyledList>
            <StyledListTitle>Title</StyledListTitle>
            <StyledListItem>one</StyledListItem>
            <StyledListItem>two</StyledListItem>
            <StyledListItem>three</StyledListItem>
        </StyledList>
    );
}

export default ListView;