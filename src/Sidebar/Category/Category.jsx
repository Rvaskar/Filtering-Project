import React from 'react'
import './Category.css'
import Input from '../../Componant/Input'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='' name='test' />
          <span className="checkmark"></span>All
        </label>

        <Input handleChange={handleChange}
        value= "sneakers"
        title = "Sneaker"
        name = "test" />

        <Input handleChange={handleChange}
        value= "flats"
        title = "Flats"
        name = "test" />

        <Input handleChange={handleChange}
        value= "sandals"
        title = "Sandals"
        name = "test" />

        <Input handleChange={handleChange}
        value= "heels"
        title = "Heels"
        name = "test" />
      </div>
    </div>
  )
}

export default Category
