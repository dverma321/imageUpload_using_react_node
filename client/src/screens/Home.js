import React from 'react'
import Title from '../components/Title'
import { Link } from 'react-router-dom'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../store/Store';
import { incrementByAmount } from '../store/reducer';
import { useSelector } from 'react-redux';


export const Home = () => {

const value = useSelector((state) => state.value)

  return (
    <div>
      <Title title="Home Page" />
        <h1>This is the Home Page</h1>

        <h1>Count : {value}</h1>
        
        <button onClick={() => {
          store.dispatch(incrementByAmount(5))
          console.log("State Updated");
        }
          
          }>Increase by 5 state update button</button>
        <Link to="/users" className="btn btn-primary" style={{margin:'2px', color:'yellow'}}>Users List</Link>
        <Link to="/registration" className="btn btn-primary" style={{margin:"2px"}}>Registration Page</Link>
        <Link to="/testing" className="btn btn-primary" style={{margin:"2px"}}>Testing Page</Link>
    </div>
  )
}
