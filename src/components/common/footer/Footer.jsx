import React, { useState, useEffect, useRef } from 'react';
import { Conferences, blog } from "../../../dummydata"
import "./footer.css"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Upcoming } from '@mui/icons-material';
const Footer = () => {
  const [db_Data, setDb_Data] = useState([]);
  const fetchData = () => {
    return fetch("https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/show-data")
      .then((response) => response.json())
      .then((data) => setDb_Data((data.allTasks)));
  }

  useEffect(() => {
    fetchData();
  }, fetchData)
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }
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
          alert(`Thank you for subscribing with ${email}`);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <section className='newletter'>
        <div className='container101 flexSB'>
          <div className='left row'>
            <h1>Newsletter - Subscribe to receive the most recent information.</h1>
            <span>Latest updates can be heard from a distance.</span>
          </div>
          <div className='right row'>
            <div class="col">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="email"
                  name='user_email'
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="primary-btn1"  type="submit" value="Send">
                  Subscribe
                </button>
                <br />
                {/* <h2>coming soon..!</h2> */}
                {/* <i className='fa fa-paper-plane'></i> */}
              </form>
              {/* {!isEmailValid ? <p>Please enter a valid email address</p> : null} */}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='container101 padding'>
          <div className='box logo'>
            <img src={Logo} alt="iedge-education-logo"/>
            <p>iEDGE International Education
              <br />Serving your Educational needs</p>
            <a className="ankeretag" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
              <i className='fab fa-whatsapp icon'></i>
            </a>
            <a className="ankeretag" href="https://pk.linkedin.com/showcase/iedge-ie/?trk=affiliated-pages" target="blank">
              <i className='fab fa-linkedin icon'></i>
            </a>
            {/* <i className='fab fa-instagram icon'></i> */}
          </div>
          {/* <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <Link className="ankeretag" to='/about'><li>About Us</li></Link>
              <Link className="ankeretag" to='/collaborations'><li>Collaborations</li></Link>
              <Link className="ankeretag" to='/partners'><li>Partners</li></Link>
              <Link className="ankeretag" to='/courses'><li>Courses</li></Link>
              <Link className="ankeretag" to='/conferences'><li>Conferences</li></Link>
              <Link className="ankeretag" to='/contact'><li>Contact us</li></Link>
            </ul>
          </div> */}
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <Link className="ankeretag" to='/'><li>Home</li></Link>
              <Link className="ankeretag" to='/about'><li>About Us</li></Link>
              <Link className="ankeretag" to='/collaborations'><li>Collaborations</li></Link>
              <Link className="ankeretag" to='/partners'><li>Partners</li></Link>
              <Link className="ankeretag" to='/courses'><li>Courses</li></Link>
              {/* <Link className="ankeretag" to='/conferences'><li>Conferences</li></Link> */}
              {/* <Link className="ankeretag" to='/shop'><li>Shop</li></Link> */}
              {/* <Link className="ankeretag" to='/contact'><li>Contact us</li></Link> */}
            </ul>
          </div>
          <div className='box'>
            <h3>Upcoming  Conferences</h3>
            {
              db_Data && db_Data.length > 0 && db_Data.slice(0, 3).map((dataObj, index) => (
              <Link to={`/conferences-detail/${dataObj._id}`} className='ankerTagFooter'>
                <div className='items flexSB1'>
                  <div className='img'>
                    <img src={dataObj.conferenceImage} alt={'iedge-education-upcoming-conference-'+dataObj.title} />
                  </div>
                  <div className='text'>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{dataObj.startDate}</label>
                    </span>
                    <span>
                      <i className='fa fa-map-marker'></i>
                      <label htmlFor=''>{dataObj.country}</label>
                    </span>
                    <h4 className="hedr">{dataObj.title.slice(0, 40)}...</h4>
                  </div>
                </div>
              </Link>
            ))}
           
          </div>
          <div className='box last'>
            <h3>Have Questions?</h3>
            <ul>
              {/* <li>
                <a className="ankeretag" href="https://goo.gl/maps/9zUj5SyGPvRH59v27" target="blank">
                  <i className='fa fa-map'></i>
                  Plot C 150, Block 2 Clifton,
                  Karachi, Pakistan
                </a>
              </li> */}
              <li>
                <a className="ankeretag" href='tel:+922135371818'>
                  <i className='fa fa-phone-alt'></i>
                  +92 21 35371818
                </a>
              </li>
              <li>
                <a className="ankeretag" href='mailto:international.education@iedge.co'>
                  <i className='fa fa-paper-plane'></i>
                  international.education@iedge.co
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          © 2023 iEDGE. All Rights Reserved
        </p>
      </div>
    </>
  )
}

export default Footer
