import React from "react";

function Gallary() {
  return (
    <div className="gallery-cont">
      <header>
        <img
          src="/Assets/cream.jpg"
          alt="A wooden background with vegetables and a knife"
        />
        <div className="name">
          <h1>OUR Gallery</h1>
          <h4>| HOME | Gallery |</h4>
        </div>
      </header>

      <section>
        <h2>OUR GALLERY</h2>
        <p>
          Welcome to our gallery page! Take a look at some of the amazing dishes
          we offer. Our talented chefs use only the freshest ingredients to
          create a menu that satisfies every palate. Browse through our gallery
          and get a taste of what we have to offer.
        </p>
      </section>

      <main className="gallery-main">
        <img src="/Assets/jack.jpg" alt="Chef holding a pizza" />
        <img src="/Assets/jane.jpg" alt="A chef making waffles" />
        <img src="/Assets/ribbons.jpg" alt="Italian pasta" />
        <img src="/Assets/subway.jpg" alt="A subway sandwich" />
        <img src="/Assets/salad.jpg" alt="Green salad" />
        <img src="/Assets/wings.jpg" alt="Fried Chicken Wings" />
        <img src="/Assets/coffee.jpg" alt="Flat White Coffee" />
        <img src="/Assets/iced_latte.jpg" alt="Iced Latte Coffee" />
        <img src="/Assets/smothy.jpg" alt="Smoothie" />
      </main>
    </div>
  );
}

export default Gallary;
