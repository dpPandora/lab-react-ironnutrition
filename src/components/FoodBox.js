import { Card, Col, Button } from 'antd';

function FoodBox(props) {
  return (
    <Col>
      <Card
        title={props.food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={props.food.image} height={60} alt="food" />
        <p>calories: {props.food.calories}</p>
        <p>servings: {props.food.servings}</p>
        <p>
          <b>total calories: {props.food.calories * props.food.servings} </b> kcal
        </p>
        <Button type="primary" onClick={() => props.removeFood(props.food._id)}> delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;