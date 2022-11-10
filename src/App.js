import './App.css';
import foods from './foods.json';
// import Example from './components/Example/Example';
import { useState } from 'react';
import FoodBox from './components/FoodBox/FoodBox';
import { Row, Divider, Button, Alert } from 'antd';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
// import SearchBar from './components/SearchBar/SearchBar';
import Search2 from './components/Search2/Search2';

function App() {
  const [foodList, setFood] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false)

  const deleteFood = (selectedFood) => {
    setFood(
      foodList.filter((food) => {
        return selectedFood !== food.name;
      })
    );
  };

  const renderFoodList = foodList
    .filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))
    .map((food, index) => {
      return (
        <FoodBox
          food={{
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
          }}
          key={index}
          deleteFood = {deleteFood}          
        />
      );
    });

  return (
    <div className="App">    
      <Button onClick={() => setShowForm(!showForm)}> Hide Form / Add New Food </Button>
      {/* botão para esconder formulário \/ */}
      {showForm && <AddFoodForm food={foodList} setFood={setFood} />}
      <Search2 search={search} setSearch={setSearch} />
      {/* <SearchBar foodList={foodList} setFood={setFood} foods={foods}/> */}

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {renderFoodList}
        {foodList.length === 0 && <Alert message="Warning Text" type="warning" /> }
      </Row>
    </div>
  );
}

export default App;
