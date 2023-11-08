import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav.jsx'
import Product from './Product/Product.jsx';

import Sidebar from './Sidebar/Sidebar.jsx';

//Database
import products from './Data/data.js'
import Card from './Componant/Card.jsx';
import Recommended from './Recommoded/Recommended.jsx';

function App() {

  const [selectCategory, setSelectedCategory] = useState(null);
  const[query, setQuery] = useState('');

  //........Input Filter....

  const handleInputChange = event => {
    setQuery(event.target.value)
  };

  const filteredItems = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  //.........Radio filters.........
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }

  //........buttons.......

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function fillteredData(products, selected, query ){
    let filteredProducts = products

    //filtering Input Items

    if(query){
      filteredProducts = filteredItems
    }

    //selected filtered

    if(selected){
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => category === selected || color === selected || company === selected || newPrice === selected || title === selected);
    }

      // Selected Filtered
    

    return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice})=>(
      <Card key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice} 
      />
    ));
  }

  const result = fillteredData(products,selectCategory,query);


  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
