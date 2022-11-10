import { Divider, Input } from 'antd';
import React, { useState } from 'react';

// guia para SearchBar: https://plainenglish.io/blog/how-to-implement-a-search-bar-in-react-js

function SearchBar({ foodList, setFood, foods}) {
  // const searchBar = () => {}

  const [searchInput, setSearchInput] = useState('');

  
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(e.target.value);
    if (searchInput.length > 0) {
      const filtrarLista = foodList.filter((food) => {
        return food.name.match(searchInput);
      });
      setFood(filtrarLista);
    }     
   if (searchInput.length == 0) {
    console.log("Aqui o nó!")
      setFood(foods);
    }
  };

  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchInput} type="text" onChange={handleChange} />
    </>
  );
}

export default SearchBar;
