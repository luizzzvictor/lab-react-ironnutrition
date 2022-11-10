import { Divider, Input } from 'antd';
import React, { useState } from 'react';

const Search2 = ({search, setSearch}) => {

    const handleChange2 = (e) => {
        setSearch(e.target.value)
    }


//componente responsável apenas pelo search
    return (
       <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange2} />
    </>
    );
};

export default Search2;