import './App.css';
import { useState } from 'react';
import { Divider, Col, Row, Layout, Input } from 'antd';


import foodJson from './foods.json';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

const { Content } = Layout;

const foodsWithIds = foodJson.map(food => {
  food._id = Math.floor(Math.random() * 10000000000);
  return food;
})

function App() {
  const [foods, modFoods] = useState(foodsWithIds);
  const [searchTerm, updateFilter] = useState('');

  //const populateIds = foods.map(food => {
  //  food._id = Math.floor(Math.random() * 10000000000);
  //  return food;
  //})
//
  //modFoods(populateIds);

  const addFood = (newFood) => {
    let newList = [...foods];
    newList.push(newFood);
    modFoods(newList);
  }

  const removeFood = (foodId) => {
    let newList = foods.filter(food => {
      return food._id != foodId;
    });
    modFoods(newList);
  }

  return (
    <Content className="App">
      <AddFoodForm addFood={addFood}/>

      <Divider>search</Divider>
      <Input type="text" onChange={(ele) => {updateFilter(ele.target.value)}}/>

      <Divider>food list</Divider>
      <Row gutter={[16,24]}>
      {foods.map(food => {
        return (
          <Search food={food} searchTerm={searchTerm} key={food._id}>
            <Col className='gutter-row' span={6}>
              <FoodBox food={food} removeFood={removeFood}/>
            </Col>
          </Search>
        )
      })}
      </Row>
    </Content>
  );
}

export default App;
