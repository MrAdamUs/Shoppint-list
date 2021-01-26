import React, { useEffect } from 'react';
import styled from 'styled-components';
import data from '../data';

const SearchItem = ({ setItems, searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    const term = e.target.value.toLocaleLowerCase();
    setSearchTerm(term);
  };

  useEffect(() => {
    const search = data.filter((item) =>
      item.itemName.toLocaleLowerCase().includes(searchTerm)
    );
    setItems(search);
  }, [searchTerm, setItems]);

  return (
    <Search>
      <input
        className='add-item-input'
        placeholder='Search item...'
        value={searchTerm}
        name='itemName'
        onChange={handleChange}
      />
    </Search>
  );
};

const Search = styled.div`
  background: #fbc1bb;
  color: #ec645b;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  .add-item-input {
    box-sizing: border-box;
    border: none;
    background: transparent;
    color: #ec645b;
    width: 60%;
    height: 30px;
  }
  input::placeholder {
    color: #ec645b;
  }
  input:focus {
    outline: 0;
  }
`;

export default SearchItem;
