import React, { useState } from 'react';
import Dishes from './Dishes';

function Menu() {

  const meals = Dishes;
  const [category, setCategory] = useState('all');

  const DisplayMeals = (meal) => {
    return (
        <div className="wrapper" key={meal.id}>
        <div className="cards" key={meal.id}>
          <img src={meal.image} alt={meal.name} />
            <div className="content">
              <h2>{meal.name}</h2>
              <h3>KSH. {meal.price}</h3>
            </div>
        </div>
        </div>
    )
  }

  const handleCategory = (cate) => {
    setCategory(cate);
  }

  const filterDishes = meals.filter(meal => {
    if(category === 'all') {
      return true;
    } else {
      return meal.category.toLowerCase() === category.toLowerCase();
    }
  })


  return (
    <div className='menu-cont'>
      <header>
        <img src="/Assets/cream.jpg" alt="A wooden background with vegetables and a knife" />
        <div className="name">
          <h1>OUR MENU</h1>
          <h4>| HOME | Menu |</h4>
        </div>
      </header>

      <section>
        <div className="bg">
        <h2>OUR LOVELY MENU</h2>
        <p>Discover our carefully crafted menu, filled with flavorful dishes made with the freshest and highest quality ingredients by our talented chefs. From classic favorites to innovative new creations, we have something for every palate. Whether you crave a hearty main course or a refreshing salad, our menu has got you covered. Take a look and see what catches your eye - we can't wait to serve you.</p>
        </div>

      </section>

      <div className="btn-category">
        <button onClick={() => handleCategory('all')} >All</button>
        <button onClick={() => handleCategory('breakfast')} >Breakfast</button>
        <button onClick={() => handleCategory('main course')} >Main Course</button>
        <button onClick={() => handleCategory('desert')}>Desert</button>
        <button onClick={() => handleCategory('drinks')} >beverages</button>
        <button onClick={() => handleCategory('coffee')} >Coffee</button>
      </div>

      {filterDishes.map(meal => DisplayMeals(meal))}

    </div>
  )
}

export default Menu;