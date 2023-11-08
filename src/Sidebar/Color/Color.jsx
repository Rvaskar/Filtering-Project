import React from 'react'
import './Color.css'
import Input from '../../Componant/Input'

const COlor = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='' name='test3' />
          <span className="checkmark all"></span>All
        </label>

        <Input handleChange={handleChange} 
        value="black"
        title="Black"
        name="test3"
        color="black" />
        
        <Input handleChange={handleChange} 
        value="blue"
        title="Blue"
        name="test3"
        color="blue" />
        
        <Input handleChange={handleChange} 
        value="red"
        title="Red"
        name="test3"
        color="red" />
        
        <Input handleChange={handleChange} 
        value="green"
        title="Green"
        name="test3"
        color="green" />

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value='white' name='test3' />
          <span className="checkmark" style={{backgroundColor:"white",  border:"2px solid black"}}></span>White
        </label>

    </div>
  )
}

export default COlor
