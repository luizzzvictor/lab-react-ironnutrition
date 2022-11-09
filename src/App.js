import './App.css';
import foods from './foods.json';
import Example from './components/Example/Example';
import { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [foodList, setFood] = useState(foods);

  const renderFoodList = foodList.map((food, index) => {
    return (
      <FoodBox
        food={{
          name: food.name,
          calories: food.calories,
          image: food.image,
          servings: food.servings,
        }}
        key={index}
      />
    );
  });

 

  return (
    <div className="App">

      <AddFoodForm food={foodList} setFood={setFood} />
      <SearchBar foodList={foodList} setFood={setFood}/>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {renderFoodList}
      </Row>
    </div>
  );
}

export default App;
