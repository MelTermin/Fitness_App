import React from 'react'
import {useState,useContext} from 'react'
import {WorkoutContext} from "../Context/WorkoutContext"
import ListItem from './ListItem';
import axios from 'axios';



function Form() {

  const {addWorkoutItem}=useContext(WorkoutContext)
  
  const [exercise, setExercise]= useState("")
  const [repetition,setRepition]=useState("")
  const [weight,setWeight]=useState("")
  const [duration,setDuration]=useState("")
  const [date,setDate]=useState("")
  const [submitting, setSubmitting] = useState(false);
 
  
  
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()
   
    setSubmitting(true);
    axios.post("http://localhost:4000/tracker", {
      exercise,repetition,weight,duration,date
    }).then (response=> {
      console.log(response)
      addWorkoutItem(response.data.data.trackerItem)
    })
  
    setWeight("")
    setDuration("")
    setExercise("")
    setRepition("")
    setDate("")
   
  
    setTimeout(() => {
      setSubmitting(false);
    }, 1000)
  
  }
    return (
      

     <div className="form-wrapper">
       
     
        <form className="workout-details-form" onSubmit= {handleSubmit}   >
          <br/>
        <h1>Workout Detail Form</h1>
          
          <label>Name of exercise:</label>
          <input required type="text" value= {exercise}  name="exercise"onChange={e => setExercise(e.target.value)} placeholder="Please type a exercise " ></input>
  
          <label>Number of repetition:</label>
          <input required type="number" value= {repetition} name="repetition" onChange={e => setRepition(e.target.value)} placeholder="Repetition " ></input>
  
          <label>Current Weight:</label>
          <input required type="number" value= {weight} name="weight" onChange={e => setWeight(e.target.value)} placeholder="Weight" ></input>
  
          <label>Duration:</label>
          <input required type="number" value= {duration} name="duration" onChange={e => setDuration(e.target.value)} placeholder="Duration" ></input>
  
          <label>Date:</label>
          <input required type="date" value={date} name="date" onChange={e => setDate(e.target.value)}></input>
          
          <br/>
          <button className="add-btn"  >ADD</button>
      
          {submitting &&
              <div class="loader1"> 
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
       }
         
         
          
        </form>
        
    
       <ListItem></ListItem>
       
  </div>
    
    )
  }
  
  export default Form