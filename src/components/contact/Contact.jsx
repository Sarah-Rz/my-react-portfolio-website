import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi';
import {BsWhatsapp} from 'react-icons/bs';
import {BsEmojiSunglasses} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tsts46q', 'template_kuzn5xe', form.current, 'bW6U7r8M4l_1N86by');
      
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Melde dich gerne bei mir!<FaAngellist/><BsEmojiSunglasses className='contact__option-icon-2'/></h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <FiMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>rezaiesara1994@gmail.com</h5>
          <a href="mailto:rezaiesara1994@gmail.com" target="_blank">Nachricht Senden</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+989216483462</h5>
          <a href="https://api.whatsapp.com/send?phone=+989216483462" target="_blank">Nachricht Senden</a>
        </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name"  placeholder='Deine Name...' required/>
          <input type="email" name="email" placeholder='Deine Email...' required/>
          <textarea name="message" rows="7" placeholder='Schreib mir eine kurze Mail und sag mir, was du von meiner Website hältst?' required></textarea>
          <button type="submit" className='btn btn-primary'>Nachricht Senden</button>
        </form>
      </div>
    </section>
  )
}

export default contact