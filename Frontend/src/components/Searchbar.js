import React, { useRef }from "react";
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from './Autocomplete'
import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: #d1e0e0;
  :hover {
    background-color: #a3c2c2;
  }
  width: 50vh;
  border-radius: 10px;
  display: flex;
  margin: 10px;
  padding: 5px;
  align-items: center;
`
const SearchBox = styled(Autocomplete)`
`
const Icon = styled(SearchIcon)`
  margin-right: 5px;
`

const Searchbar = () => {

  return (
    <Wrapper>
      <div>
        <Icon />
      </div>
        <SearchBox></SearchBox>
    </Wrapper>
  )
};

export default Searchbar;


