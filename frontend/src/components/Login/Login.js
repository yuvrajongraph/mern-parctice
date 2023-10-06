import {React, useState} from 'react'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log(data);
    };
  return (
    <>
    <div>
     <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button onClick={handleSignIn}>Sign In</button>
  </div>
  </>
  )
}

export default Login