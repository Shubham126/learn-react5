import {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const[username, setUsername] = useState('');
    const [password, setpassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    
  return (
    <div>
        <h2> Login </h2>
        <input className = "m-4 p-1" type = "text " placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className = "m-4 p-1" type = "password" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}/>
        <button className = "border-fuchsia-900 border-2 p-1" onClick={handleSubmit}> Submit </button>
    </div>
  )
}

export default Login