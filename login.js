import {React, useState} from 'react';
import axios from 'axios'
import {
  NavBtn,
  NavBtnLink,
} from '../NavBarElements';
import '../../../App.css'

const projectID= 'c23001ad-d5aa-40f6-80e0-20db69a61842'

const LogIn = () => {
  const [username,setUsername] = useState('');
  const [password, setPassword]= useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <>
    <div>
      <h1>Log In</h1>
    </div>
    <div className="wrapper">
    <div className="form">
      <h1 className="title">Chat Application</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
        <div align="center">
          <NavBtn>
            <NavBtnLink to="/loggedin">Log In </NavBtnLink>
          </NavBtn>

         

        </div>
      </form>
      <h1>{error}</h1>
    </div>
  </div>
  </>
  );
}
  
  
  
export default LogIn;