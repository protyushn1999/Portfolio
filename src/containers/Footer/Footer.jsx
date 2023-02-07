import React, { useState } from 'react';
import { motion } from "framer-motion";
// import { images } from '../../constants';
import emailPic from './email.png';
import mobile from './mobile.png';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 2, ease: 'easeInOut'}} className='footer' id = 'footer'>
        <div className="about__title">
            <h1> <span id = 'numbering'>04.</span> contact me<span id='line'></span></h1>
        </div>
      <h2 className="footer-sub-heading">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
            {emailPic && <img src={emailPic} alt="email" />}
          
          <a href="mailto:protyushn@gmail.com" target="_blank">protyushn@gmail.com</a>
        </div>
        <div className="app__footer-card">
            {mobile && <img src={mobile} alt="phone" />}
          <a href="tel:+91 63627 85806" >+91 63627 85806</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex no-outline">
            <input className="p-text no-outline" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className='app__flex no-outline'>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="submit-btn" onClick={handleSubmit}>{!loading ? 'Connect' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="submit-btn-response">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
      <div className="footer-close">
        <a href="https://www.linkedin.com/in/protyush-nayak/" target='_blank'><p className='p-text'>Designed and built by Protyush Nayak</p></a>
    
      </div>
    </motion.div>
  );
};

export default Footer;