import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// guia para SearchBar: https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

function SearchBar({ foodList, setFood }) {
  // const searchBar = () => {}

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  if (searchInput.length > 0) {
    foodList.filter((food) => {
      return food.name.match(searchInput);
    });
  }

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleChange} />
    </>
  );
}

export default SearchBar;
