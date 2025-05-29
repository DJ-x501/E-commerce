import React, { useState } from 'react';
import '../styles/contact.css';

//images
import contact from '../assets/contact.png';
import call from '../assets/call.png';
import map from '../assets/map.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contactPage">
      
      <div className="right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.757708787124!2d75.7665566!3d26.9745711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db385c23a958d%3A0x48652ebed198dd71!2sDev%20Hub%20Tech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748327655037!5m2!1sen!2sin" width="700" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="left">
        <div className="contact-container">
        <div className="icons">
          <div className="contact">
            <img src={contact} alt='contact'/>
            <div className="contactText">
              gooseprivateltd@gmail.com
            </div>
          </div>
          <div className="mobile">
            <img src={call} alt='call'/>
            <div className="contactText">
              +91 xxxxxxxxxxx, +91 xxxxxxxxxxxx
            </div>
          </div>
          <div className="map">
            <img src={map} alt='map'/>
            <div className="contactText">
              Plot no.A245, Jai Nagar, Murlipura Scheme, Murlipura, Jaipur, Rajasthan 302013
            </div>
          </div>
        </div>
        
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>

            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
