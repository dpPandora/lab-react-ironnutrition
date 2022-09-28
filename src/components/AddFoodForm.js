import { Divider, Form, Input, Button } from 'antd';

function AddFoodForm(props) {

  const submitFood = (data) => {
    data._id = Math.floor(Math.random() * 10000000000);
    console.log(data);
    props.addFood(data);
  }

  return (
    
    <Form labelCol={{ span: 2 }} wrapperCol={{ span: 16 }} onFinish={submitFood}>
      <Divider>add food entry</Divider>

      <Form.Item label="Name" name="name"><Input /></Form.Item>
      <Form.Item label="Image" name="image"><Input /></Form.Item>
      <Form.Item label="Calories" name="calories"><Input /></Form.Item>
      <Form.Item label="Servings" name="servings"><Input /></Form.Item>

      <Form.Item wrapperCol={{offset: 2}}><Button type="primary" htmlType='submit'> create </Button></Form.Item>
    </Form>
    /*
    <form>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <br/>
      <InputNumber value={undefined} type="text" onChange={() => {}} />
      <br/>

      <label>Servings</label>
      <br/>
      <InputNumber value={undefined} type="text" onChange={() => {}} />
      <br/>

      <Button type="primary"> create </Button>
    </form>
    */
  );
}

export default AddFoodForm;