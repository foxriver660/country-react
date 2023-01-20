import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import React from "react";

const InputContainer = styled.label`
  
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin: 1.5rem;

  @media(min-width: 767px){
    margin: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search country...'
})`
margin-left: 2rem;
border:none;
outline: none;
background-color: var(--colors-bg);
color: var(--colors-text)
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
