import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const initialValues = {
  itemName: '',
  quantity: '',
  price: '',
  isSelected: false,
  category: '',
};

const category = ['Select Category', 'Books', 'Digital', 'Grocery'];

const ListForm = ({ items, setItems, setTotalItemCount, calculateTotal }) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    calculateTotal();
  }, [calculateTotal, setTotalItemCount]);

  const handleSubmit = () => {
    values.itemName.length === 0 || !values.itemName.trim()
      ? alert('Item should not be empty')
      : setItems([...items, values]);
    setValues(initialValues);
  };

  return (
    <FormStyle>
      <input
        className='add-item-input'
        placeholder='Add an item...'
        value={values.itemName}
        name='itemName'
        onChange={handleInputChange}
      />
      <input
        className='add-price-input'
        placeholder='Add Price...'
        value={values.price}
        name='price'
        onChange={handleInputChange}
      />
      <input
        className='add-qty-input'
        placeholder='Add quantity...'
        value={values.quantity}
        onChange={handleInputChange}
        name='quantity'
      />
      <select
        className='selectCat'
        name='category'
        onChange={handleInputChange}
      >
        {category.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>
      <FontAwesomeIcon icon={faPlus} onClick={handleSubmit} />
    </FormStyle>
  );
};

const FormStyle = styled.div`
  background: #fbc1bb;
  color: #ec645b;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 5px;

  svg {
    margin: 5px;
  }
  .add-item-input {
    box-sizing: border-box;
    border: none;
    background: transparent;
    color: #ec645b;
    width: 60%;
    height: 30px;
    border-right: solid 1px;
  }
  .add-price-input,
  .add-qty-input {
    /* width: 100px; */
    border: none;
    background: transparent;
    border-right: solid 1px;
    color: #ec645b;
    width: 20%;
  }
  input::placeholder {
    color: #ec645b;
  }
  input:focus {
    outline: 0;
  }
  .selectCat {
    border: none;
    background: transparent;
    border-right: solid 1px;
    color: #ec645b;
    width: 20%;
  }
  select:focus {
    outline: 0;
  }
`;

export default ListForm;
