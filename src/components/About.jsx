import React from 'react';
import { GiCook } from 'react-icons/gi';
import { RiHandHeartFill } from "react-icons/ri";
import { TbSalad } from 'react-icons/tb';

function About() {
  return (
    <div className="about-cont">
      <header>
        <img
          src="/Assets/veggies.jpg"
          alt="A wooden background with vegetables and a knife"
        />
        <div className="name">
          <h1>ABOUT US</h1>
          <h4>| HOME | ABOUT US |</h4>
        </div>
      </header>

      <div className="about">
        <div className="lap">
          <img src="/Assets/waiter.jpg" alt="A male waiter serving" />
          </div>
          <div className="over">
            <h2>ABOUT OUR HOTEL</h2>
            <p>
              Our restaurant believes in making each meal an unforgettable
              experience, with the best service and food. Our skilled team of
              chefs, servers, and bartenders work hard to set us apart, while
              creating a welcoming atmosphere for all. Visit us to discover why
              we're the heart of the neighborhood.
            </p>
        </div>
      </div>

      <section className="why">
        <h2>WHY CHOOSE US ?</h2>
        <p>
          At our establishment, we take pride in offering exceptional service
          and a unique experience for every guest. Here are just a few reasons
          why you should choose us:
        </p>
      </section>

      <div className="wrap">
        <div className="cards">
          <h2>Highly Trained Staff</h2>
          <GiCook className="icons" />
          <p>
            Our chefs are culinary experts who bring passion and skill to every
            dish. We use only the freshest ingredients to create flavors that
            burst with every bite. Quality food is our priority and our highly
            trained chefs make that possible. We select only the best talent in
            the industry. Come taste the difference that expertise makes.
          </p>
        </div>

        <div className="cards">
          <h2>Fresh ingredients</h2>
          <TbSalad className="icons" />
          <p>
            We believe in using only the freshest, highest quality ingredients
            in our dishes. To ensure this, we source our ingredients from local
            farmers who share our values of sustainability and ethical
            practices. We take great care in selecting only the freshest
            produce, meats, and seafood to create dishes that are bursting with
            flavor.
          </p>
        </div>

        <div className="cards">
          <h2>High Hospitality</h2>
          <RiHandHeartFill className="icons" />
          <p>
            At our restaurant, hospitality it's a mindset. We strive to ensure
            every guest feels welcome and appreciated, with warmth and
            friendliness from the moment you arrive. Our professional staff is
            committed to creating an exceptional dining experience, making great
            hospitality our top priority.
          </p>
        </div>
      </div>

      <section className="team">
        <h2>OUR LOVELY TEAM</h2>
        <p>
          Meet the heart and soul of our restaurant - our lovely team. Our
          passionate and dedicated staff. Come and experience the warmth and
          hospitality our lovely team brings to every guest.
        </p>
      </section>

      <div className="wraps">
        <div className="cards">
          <img
            src="/Assets/Mark.jpg"
            alt="Mark Senior Chef of Edenview Hotel"
          />
          <h2>Mark Doe</h2>
          <h4>Senior Chef</h4>
        </div>

        <div className="cards">
          <img src="/Assets/girl.jpg" alt="Chef woman - pastry expert" />
          <h2>Martha Norries</h2>
          <h4>Pastry Expert</h4>
        </div>

        <div className="cards">
          <img src="/Assets/phil.jpg" alt="Trained Barista" />
          <h2>Phil Bond</h2>
          <h4>Trained Barista</h4>
        </div>
      </div>
    </div>
  );
}

export default About;