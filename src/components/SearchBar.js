import React, { useState} from 'react'
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const StyledForm = styled.div`
    margin-top: 1em;
    padding: 1em;
    width: 100%;
`;

const StyledContainer = styled.div`
    padding: 8px 14px 8px 14px;

    background-color: #fafafa;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 8px;
`;

const StyledSearchBar = styled.input`
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 1.5em;
    flex: 1;
    background-color: #fafafa;
`;

const StyledSearchIcon = styled.span`
    font-size: 1em;
    color: #1c1c1c;
    margin-right: .5em;
`;

const SearchBar = () => {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        e.preventDefault();
        setValue(e.target.value);
    }
    
    return (
        <StyledForm>
            <StyledContainer>
                <StyledSearchIcon>
                    <FiSearch />
                </StyledSearchIcon>
                <StyledSearchBar onChange={handleInputChange} value={value} />
            </StyledContainer>
        </StyledForm>
    );
}

export default SearchBar;