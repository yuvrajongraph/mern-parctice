import React, { useState, useContext } from 'react';
import AuthContext from './AuthContext'
import { Navigate } from 'react-router-dom';

const AuthProvider = (props) => {
    const [userData, setUserData] = useState(null);
  return (
    <>
    <AuthContext.Provider value={{userData, setUserData}}>
        {props.children}
    </AuthContext.Provider>
    </>
  )
}
const useAuth = () => useContext(AuthContext);

const storedUser = localStorage.getItem('user');
const user = storedUser ? JSON.parse(storedUser) : null;

const Authenticated = ({children})=>{
  if(user){
    return <>{children}</>
  }else{
    return <><Navigate to={"/"} /></>
  }
}

export {AuthProvider, useAuth, Authenticated,user};