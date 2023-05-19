import React from 'react';
import { IoIosCall } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className='contact-main'>

      <header>
        <img src="/Assets/cream.jpg" alt="A wooden background with vegetables and a knife" />
        <div className="name">
          <h1>Contact Us</h1>
          <h4>| HOME | Contacts |</h4>
        </div>
      </header>

      <section>
        <h2>GET IN TOUCH TODAY!</h2>
        <p>Get in touch with us! Our contact page is the gateway to connecting with our restaurant. Whether you have a question, want to make a reservation, or simply want to say hello, we're here to listen. Fill out the contact form or give us a call, and our friendly team will assist you. We value your feedback and look forward to hearing from you.</p>
      </section>

      <main className="contact-main">
        <div className="wrapper">
            <div>
            <IoIosCall className='icons' />
            <p>+27-72-431-8975</p>
            </div>
            <div>
            <MdEmail className='icons' />
            <p>office@edenview.co.za</p>
            </div>
            <div>
            <ImLocation className='icons' />
            <p>101 Cape Road Hoekwil, South Africa</p>
            </div>

        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.44823257144!2d34.79017600914245!3d0.7803991631412013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781ebc90e3b6d63%3A0xe8cbda96f2ff2150!2sEden%20View%20Hotel!5e0!3m2!1sen!2ske!4v1684140942171!5m2!1sen!2ske" style={{border: '0'}} title='Edebview Hotel on Google Maps' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </main>

    </div>
  )
}

export default Contact;