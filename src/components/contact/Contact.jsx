import React, { useState, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import "./contact.css"
import Back6 from '../common/back/Back6';
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.4367494581197!2d67.00669757638113!3d24.814733447083828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c8d71ac2dd1%3A0x1d37484d49621399!2siEdge!5e0!3m2!1sen!2s!4v1692184444596!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h1e5eyj",
        "template_gze234d",
        form.current,
        "m4iKMISmR1vd9sgfP"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(`Thank you for Contact us ${email}`);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
      }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(name, email, subject, message)
  //   alert('The message has been delivered successfully.')
  //   window.location.reload(false)
  // }


  return (
    <>
      <Back6 title='Contact us' />
      <section className='contacts padding'>
        <div className='container101 shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Plot C 150, Block 2 Clifton, Karachi, Pakistan</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>Education.iedge.co</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+92 21 35371818</p>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className='flexSB'>
                <input type='text'
                 name='user_name'
                 placeholder='Name'
                 value={name}
                 onChange={(e) => setName(e.target.value)} />
                <input type='email'
                 name='user_email'
                 placeholder='Email'
                 value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <input type='text'
              name='user_subject' 
              placeholder='Subject' 
              value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea 
              cols='30' rows='10' placeholder='Type your message here...' value={message} name='user_message' onChange={(e) => setMessage(e.target.value)}>
              </textarea>
              <button className='primary-btn' type="submit" value="Send">SEND MESSAGE</button>
            </form>

            <h3>Follow us on</h3>
            <a className="ankeretag" href='https://www.linkedin.com/showcase/iedge-ie/?originalSubdomain=pk' target='blank'><span>LinkedIn</span></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
