import logo from './logo.svg';
import './App.css';
import arrayFood from "./foods.json";
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './FoodForm';

// import { Card, Row, Col, Divider, Input, Button } from "antd";


function App() {
  const [foods, setFoods] = useState(arrayFood)
  const addFood = () => {}
  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
    {foods.map((food) => {
      return (
        <FoodBox food={food}></FoodBox>
      )
    })}
  </div>
)}


    //     <div key={foods.name}>
    //       <p>{foods.name}</p>
    //       <img src={foods.image} alt={foods.name} width={100} />
    //     </div>
    //   ))}
    // </div>




// function Example() {
//   // After importing the components we can render them directly:
//   return (
//     <div>
//       <Row>
//         <Col>
//           <Divider>Fancy Input</Divider>
//           <Input value={""} onChange={() => {}} />
//         </Col>

//         <Col>
//           <Card title={"Fancy Card"}>
//             <Button onClick={() => {}}>Fancy Button</Button>
//           </Card>
//         </Col>
//       </Row>
//     </div>
//   );
// }

export default App;
