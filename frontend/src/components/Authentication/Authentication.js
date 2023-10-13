import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Authentication.css"
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../contexts/Auth/AuthProvider';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  //const navigate = useNavigate();
  const { userData, setUserData} = useAuth();
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignIn = async () => {
    const user = {
        email: email,
        password:password
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const response = await fetch('http://localhost:1010/signin', options);
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      if(data.message){
        alert(data.message)
        window.location.href = "/todo";
      }else{
        alert(data.error)
      }
    };
    
    const handleSignUp = async()=>{
      const user = {
        email: email,
        password:password
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };
      const response = await fetch('http://localhost:1010/signup', options);
      const data = await response.json();
      if(data.message){
        alert(data.message)
      }else{
        alert(data.error)
      }
    }
    
  return (
    <>
      <Navbar />
     <div className="login-signup-container">
      {/* <div className='box'> */}
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form>
        <div className="email">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="password">
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      {isLogin ? <button type="submit" onClick={handleSignIn}> Login </button>:<button type="submit" onClick={handleSignUp}> Sign Up </button>}
      </form>
      <p onClick={toggleForm}>
        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
      </p>
    </div>
    {/* </div> */}
  </>
  )
}

export default Authentication