import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import InputBase from '@material-ui/core/InputBase';
import useOnclickOutside from "react-cool-onclickoutside";

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: #d1e0e0;
  width: 50vh;
  margin: 1vh;
  padding: 1vh;
  align-items: center;
`
const SearchBar = styled.div`
  :hover {
    background-color: #a3c2c2;
  }
  width: 100%;
  display: flex;
`

const Icon = styled(SearchIcon)`
  margin-right: 5px;
  margin-top: auto;
  margin-bottom: auto;
`

const Choices = styled.li`
  list-style: none;
  cursor: pointer;
  :hover {
    background-color: #a3c2c2;
  }
`

export default function PlacesAutocomplete(){
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(description, false);
    clearSuggestions();

    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log("📍 Coordinates: ", { lat, lng });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () => 
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      
      return (
        <Choices key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </Choices>
      );
    })
  

  return (
    <Wrapper>
      <SearchBar ref={ref}>
        <Icon/>
        <InputBase
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
      </SearchBar>
      {status === "OK" && renderSuggestions()}
    </Wrapper>
  );
};