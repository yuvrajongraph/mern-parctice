import { React, useState } from "react";
import "./FoodDelivery.css";
import logo from "./img/istockphoto-1407689582-612x612.webp";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import logoOne from "./img/logo1.png";
import logoTwo from "./img/logo2.png";
import logoThree from "./img/logo3.png";
import logoFour from "./img/logo4.png";
import "./mobile.css";
import {user} from '../../contexts/Auth/AuthProvider'

const FoodDelivery = () => {
  const [inputList, setInputList] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputList({ ...inputList, [name]: value });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const userLogOut = ()=>{
    localStorage.clear();
  }
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img src={logo} alt="MyOnlineMeal.com" />
        </div>
        <ul>
          {/* <li className="item">
            <a href="#home">Home</a>
          </li>
          <li className="item">
            <a href="#services-container">Services</a>
          </li>
          <li className="item">
            <a href="#client-section">Our Clients</a>
          </li>
          <li className="item">
            <a href="#contact">Contact Us</a>
          </li> */}
          <li className="item">
            <a href="/todo">Todo</a>
          </li>
          <li className="item">
            <a href="/food">Food</a>
          </li>
          <li className="item">
            <a href="/fitness">Fitness</a>
          </li>
          {user ? (
            <li className="item">
              <a href="/" onClick={userLogOut}>Logout</a>
            </li>
          ) : (
            <li className="item">
              <a href="/">Login/Signup</a>
            </li>
          )}
        </ul>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Scroll options
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <a href="#home">Home</a>
              <a href="#services-container">Services</a>
              <a href="#client-section">Our Clients</a>
              <a href="#contact">Contact Us</a>
            </div>
          )}
        </div>
      </nav>

      <section id="home">
        <h1 className="h-primary">Welcome To My App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="btn">Order Now</button>
      </section>

      <section id="services-container">
        <h1 className="h-primary center">Our Services</h1>
        <div id="services">
          <div className="box">
            <img src={one} alt="" />
            <h2 className="h-secondary center">Food Ordering</h2>
            <p className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sit expedita nesciunt voluptatem ea quam temporibus
              porro, possimus est, deleniti placeat.
            </p>
          </div>
          <div className="box">
            <img src={two} alt="" />
            <h2 className="h-secondary center">Food Catering</h2>
            <p className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sit expedita nesciunt voluptatem ea quam temporibus
              porro, possimus est, deleniti placeat.
            </p>
          </div>
          <div className="box">
            <img src={three} alt="" />
            <h2 className="h-secondary center">Bulk Ordering</h2>
            <p className="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium sit expedita nesciunt voluptatem ea quam temporibus
              porro, possimus est, deleniti placeat.
            </p>
          </div>
        </div>
      </section>

      <section id="client-section">
        <h1 className="h-primary center">Our Clients</h1>
        <div id="clients">
          <div className="client-item">
            <img src={logoOne} alt="" />
          </div>
          <div className="client-item">
            <img src={logoTwo} alt="" />
          </div>
          <div className="client-item">
            <img src={logoThree} alt="" />
          </div>
          <div className="client-item">
            <img src={logoFour} alt="" />
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 className="center h-primary">Contact Us</h1>
        <div id="contact-box">
          <form action="">
            <div className="form-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inputList.name}
                onChange={handleEvent}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email :</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputList.email}
                onChange={handleEvent}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone no. :</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                value={inputList.phone}
                onChange={handleEvent}
                placeholder="Enter your phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Message :</label>
              <textarea
                name="message"
                id="message"
                value={inputList.message}
                onChange={handleEvent}
                placeholder="Enter your message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="btn" id="submit-query">Submit</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="center">
          Copyright &copy; www.FoodyMaza.com. All rights reversed
        </div>
      </footer>
    </>
  );
};

export default FoodDelivery;
