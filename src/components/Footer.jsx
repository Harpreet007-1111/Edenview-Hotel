import React from 'react';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
        <div className="wrapper">
        <div className="call">
        <h2>Contact Details</h2>
        <p><b>Address</b>: 101 Cape Road Hoekwil, South Africa</p>
        <p><b>Email</b>: office@edenview.co.za</p>
        <p><b>Phone</b>: +27-72-431-8975</p>
        </div>

          <div className="open">
            <h2>Open Hours</h2>
            <p>So no matter what time of day or night your schedule demands, you can always count on a warm welcome and exceptional service at our hotel, making your stay with us an experience you won't soon forget.</p>
            <p><b>Tuesday-Saturday</b>.....<b>9 AM - 10PM</b></p>
            <p><b>Sunday</b>..... <b>10AM - 11PM</b></p>
            <p><b>Monday</b>......... <b>Closed</b></p>
          </div>

        <div className="social">
          <h2>Social Media</h2>
          <BsFacebook className='icons' />
          <AiFillInstagram className='icons' />
          <AiFillTwitterCircle className='icons' />
        </div>
        </div>
    </footer>
  )
}

export default Footer;