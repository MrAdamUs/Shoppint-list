import React, { useEffect } from 'react';
import styled from 'styled-components';
import data from '../data';

const FilterItem = ({ setFilter, filterName, setItems }) => {
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  useEffect(() => {
    const filterList = data.filter((data) => data.category === filterName);
    filterName === 'all' ? setItems(data) : setItems(filterList);
  }, [filterName, setItems]);

  return (
    <FilterStyle>
      <select className='selectCat' onChange={handleFilter}>
        <option value='all'>Select Filter</option>
        <option value='Grocery'>Grocery</option>
        <option value='Digital'>Digital</option>
        <option value='Books'>Books</option>
      </select>
    </FilterStyle>
  );
};

const FilterStyle = styled.div`
  background: #fbc1bb;
  color: #ec645b;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;

  .selectCat {
    border: none;
    background: transparent;
    color: #ec645b;
    width: 100%;
  }
  select:focus {
    outline: 0;
  }
`;

export default FilterItem;
