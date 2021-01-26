import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

const ListItem = ({ data, setItems, setTotalItemCount }) => {
  data.sort(function (a, b) {
    if (a.itemName < b.itemName) {
      return -1;
    }
    if (a.itemName > b.itemName) {
      return 1;
    }
    return 0;
  });

  const handelQuantityIncreate = (i) => {
    const newItems = [...data];
    newItems[i].quantity++;
    setItems(newItems);
    calculateTotal();
  };

  const handelQuantityDecreate = (i) => {
    const newItems = [...data];
    if (newItems[i].quantity > 0) newItems[i].quantity--;
    setItems(newItems);
    calculateTotal();
  };

  const toggleComplete = (i) => {
    const newItems = [...data];
    newItems[i].isSelected = !newItems[i].isSelected;
    setItems(newItems);
  };

  const calculateTotal = () => {
    const totalItemCount = data.reduce((total, data) => {
      return total + data.quantity * data.price;
    }, 0);
    setTotalItemCount(totalItemCount);
  };

  return (
    <ItemList>
      {data.map((d, i) => (
        <div className='item-container' key={i}>
          <div className='item-name' onClick={() => toggleComplete(i)}>
            <FontAwesomeIcon icon={d.isSelected ? faCheckCircle : faCircle} />
            <span className={`${d.isSelected ? 'completed' : ''}`}>
              {d.itemName}
            </span>
          </div>
          <div className='item-name'>
            <span>{d.category}</span>
          </div>
          <div className='quantity'>
            <button>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => handelQuantityDecreate(i)}
              />
            </button>
            <span> {d.quantity} </span>
            <button>
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => handelQuantityIncreate(i)}
              />
            </button>
          </div>
          <div>
            <span>${d.price}</span>
          </div>
        </div>
      ))}
    </ItemList>
  );
};

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  .item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    border-bottom: 1px #fbc1bb solid;
  }

  .item-name {
    cursor: pointer;
    width: 20%;
  }

  .item-name svg {
    margin-left: 5px;
    margin-right: 5px;
  }
  .completed {
    text-decoration: line-through;
  }
  .quantity {
    display: flex;
    align-items: center;
    border: 1px solid #ec645b;
    background: white;
    border-radius: 50px;
    font-size: 12px;
    color: #ec645b;
    min-width: 70px;
    justify-content: space-between;
  }

  button {
    background: transparent;
    border: none;
    margin: 3px;
    color: #ec645b;
  }
  button:focus {
    outline: 0;
  }

  button:hover {
    cursor: pointer;
  }
`;

export default ListItem;
