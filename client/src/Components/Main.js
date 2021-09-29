import React from 'react'
import { Link} from 'react-router-dom';



function Main() {


  return (
    <div>
  
     
      <div className="home-container">
      
        <div className="home-container-titles">
          <div><h2>Node.js Weight Tracker with Postgres SQL & React</h2></div>
          <br></br>
            <div>Welcome to the Weight Tracker and Fitness Workout sample project!</div>
            <br></br>
            <br></br>
            <div>Add a <Link className="link-home"  to="/form" >
            weight measurement </Link> or find a <Link className="link-home"  to="/workout" >
            workout according to your need!</Link>
             </div>
        </div>
      </div>

    </div>
  )
}

export default Main