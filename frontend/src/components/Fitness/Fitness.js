import {React, useState} from 'react'
import "./Fitness.css"
import logo from './img/istockphoto-876895654-612x612.webp'
import Navbar from '../Navbar/Navbar';

const Fitness = () => {
    const [inputList, setInputList] = useState({
        name:"",
        age:"",
        gender:"",
        locality:""
    });
    const handleEvent = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setInputList({...inputList,[name]:value});
    }
  return (
    <>
    <div className="main-div">
    <header className="header">
      <div className="left">
        <img src={logo} alt="" />
        <div>fitness</div>
      </div>
      {/* <div className="mid">
        <ul className="navbar">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Fitness Calculator</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div> */}
      <Navbar />
      <div className="right">
        <button className="btn">Call us</button>
        <button className="btn">Email us</button>
      </div>
    </header>
    <div className="container">
      <h1>Join fitness freak gym now</h1>
      <form action="#">
        <div className="form-group">
          <input type="text" name="name" value={inputList.name}  onChange={handleEvent} placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <input type="text" name="age"  value={inputList.age} onChange={handleEvent} placeholder="Enter your age" />
        </div>
        <div className="form-group">
          <input type="text" name="gender" value={inputList.gender} onChange={handleEvent} placeholder="Enter your gender" />
        </div>
        <div className="form-group">
          <input type="text" name="locality"  value={inputList.locality} onChange={handleEvent} placeholder="Enter your locality" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Fitness