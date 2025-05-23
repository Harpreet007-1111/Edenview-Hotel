import React, { useState } from "react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Hopper",
      content:
        "I absolutely love dining at this restaurant with a swimming pool! The ambiance is fantastic, and the pool adds a unique touch to the dining experience.",
      image: "/Assets/man.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      content:
        "I recently visited this restaurant with a swimming pool, and it was such a delightful experience. The restaurant has a lovely outdoor seating area overlooking the pool.",
      image: "/Assets/Anne.jpg",
    },
    {
      id: 3,
      name: "Emily Were",
      content:
        "This restaurant with a swimming pool is a hidden gem! The pool adds a refreshing element to the dining experience, and it's a wonderful place to spend time with friends and family.",
      image: "/Assets/kate.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="test-cont">
      <header>
        <img
          src="/Assets/cream.jpg"
          alt="A wooden background with vegetables and a knife"
        />
        <div className="name">
          <h1>Testimonials</h1>
          <h4>| HOME | Testimonials |</h4>
        </div>
      </header>

      <section>
        <div>
          <h2>WHAT CUSTOMERS SAY?</h2>
          <p>
            Discover the voices of our satisfied customers who have experienced
            the exceptional service and quality we provide. Our testimonials
            reflect the genuine delight and appreciation shared by those who
            have dined with us. From the delectable flavors to the warm and
            inviting ambiance, our guests have embraced the unforgettable
            moments created at our restaurant. Immerse yourself in their stories
            and let their words inspire your own memorable dining experience.
          </p>
        </div>
      </section>

      <div className="testimonial-slider">
        <div className="btn-left">
        <button className="prev" onClick={prevSlide}>
          &#8249;
        </button>
        </div>

        <div className="testimonial">
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
          />
          <h3>{testimonials[currentSlide].name}</h3>
          <p>"{testimonials[currentSlide].content}"</p>
        </div>
        <div className="btn-right">
        <button className="next" onClick={nextSlide}>
          &#8250;
        </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
