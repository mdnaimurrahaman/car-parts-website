
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import './Contact.css'
import { useRef } from 'react';
import React from 'react';

// import { ToastContainer, toast } from 'react-toastify';




const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_p0uqrhz', 'template_axsy2uj', form.current, 'XbpBt79Jxb9dTKq3-')
          .then((result) => {
            e.target.reset();
            // toast('Your message successfully send')

              console.log(result.text);
          }, (error) => {

              console.log(error.text);
          });
      };
    return (
        <section id='contact'>
           <h2 className='catagories-title'>Contact Me</h2>
            <p className='text-center uppercase '>Get In Touch</p>
            <div className='hr-line line-1 mb-12'>
                <hr/>
            </div>

           {/* <ToastContainer/> */}

           <div className="container contact__container">
            <div className="contact__options">
                <img src="https://i.ibb.co/KzB6sWb/Contact.png" alt="" srcset="" />
            </div>
            <form  ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="4" placeholder='Your Message' required></textarea>
                    <button typeof='submit' className='btn hero-btn'>Send Message</button>
                </form>
           </div>
        </section>
    );
};

export default Contact;