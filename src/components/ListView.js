import React, { useState } from 'react'
import styled from 'styled-components';

const StyledList = styled.ul`
    list-style-type: none;
    padding: 1em;
    margin: 1em 0 0 0;
`;

const StyledListTitle = styled.li`
	color: #ccc;
	font-size: 1.4em;
    text-transform: uppercase;
    font-weight: bold;
	margin-bottom: .7em;
    display: block;
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
            <StyledListTitle>Videos</StyledListTitle>
            {config.map((item, i) => (
                <StyledListItem key={i} onClick={() => handleExpand(i)}>
                    {/* {item.title} */}
                    { (expanded.indexes[i] === i) ? ('expanded') : ('not expanded')}
                </StyledListItem>
            ))}
        </StyledList>
    );
}

export default ListView;
