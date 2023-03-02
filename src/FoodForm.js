import { Divider, Input } from 'antd';
import React, { useState } from 'react'

function AddFoodForm({addFood}) {
// const addFoodForm = (props) => {

    const { handleAddFood } = addFood

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    const handleChangeName = (event) => setName(event.target.value)
    const handleChangeImage = (event) => setImage(event.target.value)
    const handleChangeCalories = (event) => setCalories(event.target.value)
    const handleChangeServing = (event) => setServings(event.target.value)


    const handleSubmit = (event) => {
        event.preventDefault()

        const foodToAdd = {
            name,
            image,
            calories,
            servings,
        }
        handleAddFood(foodToAdd)
        setName('')
        setImage('')
        setCalories('')
        setServings('')
    }
 


// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

// Iteration 4
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <input value={name} type="text" onChange={handleChangeName}/>

      <label>Image</label>
      <input value={image} type="text" onChange={handleChangeImage} />

      <label>Calories</label>
      <input value={setCalories} type="number" onChange={handleChangeCalories} />

      <label>Servings</label>
      <input value={setServings} type="number" onChange={handleChangeServing} />

      <button type="submit">Create</button>
    </form>
  );
}


export default AddFoodForm;
