import { Divider, Input } from 'antd';
import React, { useState } from 'react'

function AddFoodForm({addFood}) {
// const addFoodForm = (props) => {

    // const { handleAddFood } = props

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

//     const handleSubmit = (event) => {
//         event.preventDefault()

//         const foodToCreate = {
//             name,
//             image,
//             calories,
//             servings,
//         }
//         handleAddFood(foodToAdd)
//         setName('')
//         setImage('')
//         setCalories('')
//         setServings('')
//     }
 
// }

// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

// Iteration 4
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <label>Servings</label>
      <Input value={undefined} type="number" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}


export default AddFoodForm;
