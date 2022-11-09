import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({food,setFood}) {
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function handleSetNewFood(ev) {
    setForm({ ...form, [ev.target.name]: ev.target.value });
    console.log([ev.target.name], ev.target.value);
  }

  function handleSubmitNewFood(event) {
    event.preventDefault();
    setFood([...food, form]);
    setForm({
      name: '',
      calories: '',
      image: '',
      servings: '',
    });
  }

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name ='name'value={form.name} type="text" onChange={handleSetNewFood} />

      <label>Image</label>
      <Input name='image' value={form.image} type="text" onChange={handleSetNewFood} />

      <label>Calories</label>
      <Input name='calories' value={form.calories} type="number" onChange={handleSetNewFood} />

      <label>Servings</label>
      <Input name='servings' value={form.servings} type="number" onChange={handleSetNewFood} />

      <button type="submit" onClick={handleSubmitNewFood}>Create</button>
    </form>
  );
}

export default AddFoodForm;
