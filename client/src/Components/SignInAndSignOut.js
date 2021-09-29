import React, {useContext,useState} from 'react'
import UserContext from '../Context/user'
import { Redirect } from 'react-router-dom';
import {auth, signInWithGoogle} from '../firebase'
import { FaFacebook,FaYoutube } from 'react-icons/fa';
import {SiInstagram} from 'react-icons/si';

function SignInAndSignOut() {
  const {user,setUser}=useContext(UserContext)
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') return;

    let currentUser;

    try {
      if (isSignIn) {
        const { user: authUser } = await auth.signInWithEmailAndPassword(email, password);
        currentUser = authUser;
      } else {
        const { user: newUser } = await auth.createUserWithEmailAndPassword(email, password);
        currentUser = newUser;
      }

      setUser({ displayName: currentUser.email, email: currentUser.email });
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ displayName: currentUser.email, email: currentUser.email })
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (user) return <Redirect to="/main" />;
  return (


    <div  className="signup-box">
        <div className="signup-left"></div>
      <div className="signup-right" >
        <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

        <form  className="form"  onSubmit={handleSubmit}>
          <br></br>
          <label >
            <span >Email</span>
            <input
             
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span c>Password</span>
            <input
              
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div className="toggle-btn">
            <button className="btn" >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <button className="btn-1"  type="button" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
          <div className="social-media">
                   <FaFacebook size={32}></FaFacebook>
                   <SiInstagram size={32}></SiInstagram>
                  <FaYoutube size={32}></FaYoutube>
              </div>
        </form>
        <div >
          <br></br>
          <span>Already have an account?  </span>
          <button   className="btn" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}!
          </button>
        </div>
      </div>
    </div>

    
 

   
  )
}

export default SignInAndSignOut