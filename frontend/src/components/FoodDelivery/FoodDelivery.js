import {React, useState} from "react";
import "./FoodDelivery.css";
import logo from './img/istockphoto-1407689582-612x612.webp'
import one from './img/1.png';
import two from './img/2.png';
import three from './img/3.png';
import logoOne from './img/logo1.png'
import logoTwo from './img/logo2.png'
import logoThree from './img/logo3.png'
import logoFour from './img/logo4.png'
import './mobile.css';

const FoodDelivery = () => {
  const [inputList, setInputList] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  }); 

  const handleEvent = (e)=>{
        
        const name = e.target.name;
        const value = e.target.value;

        setInputList({...inputList,[name]:value});
  }
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img
            src={logo}
            alt="MyOnlineMeal.com"
          />
        </div>
        <ul>
          <li className="item">
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
          </li>
          <li className="item">
            <a href="/todo">Todo</a>
          </li>
          <li className="item">
            <a href="/fitness">Fitness</a>
          </li>
          <li className="item">
            <a href="/">Login/Signup</a>
          </li>
        </ul>
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
