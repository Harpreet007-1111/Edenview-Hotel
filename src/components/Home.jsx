import React, { useState, useEffect } from 'react';

function Home() {

  const slides = [
    process.env.PUBLIC_URL + '/assets/pool.jpg',
    process.env.PUBLIC_URL + '/assets/table.jpg',
    process.env.PUBLIC_URL + '/assets/coffee.jpg',
    process.env.PUBLIC_URL + '/assets/beer.jpg',
    process.env.PUBLIC_URL + '/assets/pizza.jpg',
    process.env.PUBLIC_URL + 'assets/desert.jpg'
  ];

  const texts = [
    {
      id: 1,
      title: 'Swimming Pool',
      subtitle: 'Relax by the pool with stunning views',
      button: 'Book Now',
    },
    {
      id: 2,
      title: 'Fine Dining',
      subtitle: 'Experience our exquisite cuisine',
      button: 'Learn More',
    },
    {
      id: 3,
      title: "Savor our Beverages",
      subtitle: "Indulge in our rich and creamy cappuccinos, paired perfectly with our heart-shaped cookie.",
      button: 'Learn More'
    },
    {
      id: 4,
      title: 'OUR Bar',
      subtitle: 'Enjoy a wide selection of drinks in our bar',
      button: 'View Menu',
    },
    {
      id: 5,
      title: 'Delicious Pizza',
      subtitle: 'Freshly made pizza with a variety of toppings',
      button: 'Explore More',
    },
    {
      id: 6,
      title: 'Savory Deserts',
      subtitle: 'Experince our mouth-watering deserts',
      button: 'explore now'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const currentText = texts[currentSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='slideshow'>
      {slides.map((slide, index) => {
        return (
          <>
          <div key={currentText.id} className={`slide ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${slide})` }} ></div>
          {index === currentSlide && (
            <div className="text-container">
              <h1 className="title">{currentText.title}</h1>
              <p className="subtitle">{currentText.subtitle}</p>
              <button className="button">{currentText.button}</button>
            </div>
          )}
          </>

        )
      })}
    </div>
  )
}

export default Home;