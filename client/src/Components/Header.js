import React, { useContext} from 'react'
import UserContext from '../Context/user';
import { Link, useHistory } from 'react-router-dom';
import { RiHome4Line } from 'react-icons/ri';
import { BiSpreadsheet } from 'react-icons/bi';
import { MdFitnessCenter } from 'react-icons/md';
import { AiOutlineContacts} from 'react-icons/ai';
import { GoSignOut} from 'react-icons/go';

import {auth} from '../firebase'

function Header() {
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    auth.signOut();
    history.push('/sign-in-and-sign-up');
  };



  

  return (

      <>
       
      {user ? (
        <div  className="sidebar">
          
           <nav  className="nav">
 
        <ul className="nav-links">
        <div className="profile-wrapper" > 
           <div className="profile-name">  {user && user.displayName.charAt(0).toUpperCase()}</div>
           <br/>
           <br/>
           <div className="email-text" style= {{color:"white", textAlign:"center"}}> {user && user.email} </div>
           <div className="break-line"></div>
        </div>

        
        
        <Link className="link" to="/" >
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <RiHome4Line className="icons-nav" color="white"  size={22}/><li className="nav-li" style= {{marginLeft:"10px"}}>Home</li>
          </div>
      </Link>
      

        <Link className="link" to="/form" >
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <BiSpreadsheet color="white"  size={22}/><li  className="nav-li"style= {{marginLeft:"10px"}}>Progress</li>
          </div>
        </Link>


        <Link className="link" to="/workout" >
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <MdFitnessCenter  color="white" size={22}/><li className="nav-li" style=  {{marginLeft:"10px"}}>Workout</li>
          </div>
        </Link>

        <Link className="link" to="/contact" >
          <div style={{display: "flex", justifyContent: "space-between"}}>
              <AiOutlineContacts color="white"  size={22}/><li className="nav-li" style= {{marginLeft:"10px"}}>Contact</li>
            </div>
        </Link>


        <Link className="link" to="/" >
            <div style={{display: "flex", justifyContent: "space-between"}}>
              <GoSignOut color="white"  size={22.6}/>  <li  className="nav-li" style= {{marginLeft:"10px"}}  onClick={handleSignOut}> Signout </li>
             </div>
        </Link>
      
      </ul> 
        </nav>
        </div>
      ) : null}
   
 </>
  )
}

export default Header