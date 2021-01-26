import React, { useState } from 'react';
import GlobalStyle from './components/GlobalStyle';
import styled from 'styled-components';
import data from './data';
import ListItem from './components/ListItem';
import ListForm from './components/ListForm';
import FilterItem from './components/FilterItem';
import SearchItem from './components/SearchItem';

const App = () => {
  const [items, setItems] = useState(data);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [filterName, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const calculateTotal = () => {
    const totalItemCount = items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);

    setTotalItemCount(totalItemCount);
  };

  return (
    <AppStyle>
      <GlobalStyle />
      <div className='app-background'>
        <div className='main-container'>
          <div className='top-filter'>
            <SearchItem
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              setItems={setItems}
            />
            <FilterItem
              setFilter={setFilter}
              items={items}
              filterName={filterName}
              setItems={setItems}
            />
          </div>
          <ListForm
            items={items}
            setItems={setItems}
            setTotalItemCount={setTotalItemCount}
            totalItemCount={totalItemCount}
            calculateTotal={calculateTotal}
          />
          <ListItem
            data={items}
            setItems={setItems}
            setTotalItemCount={setTotalItemCount}
          />
          <div className='total'>Total: ${totalItemCount}</div>
        </div>
      </div>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  font-family: sans-serif;
  /* text-align: center; */
  .app-background {
    background-color: #6d6d6d;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .main-container {
    background-color: #cf5f57;
    width: 80%;
    height: min-content;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.35);
  }

  .title {
    text-align: center;
  }

  .remove-button {
    color: white;
    background-color: red;
  }

  .total {
    float: right;
    padding: 10px;
  }
  .top-filter {
    display: flex;
    justify-content: space-between;
  }
`;

export default App;
