import React, {useContext, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import noteContext from '../context/NoteContext'


const Testing = () => {

    const value = useSelector((state) => state.value)

    // using context api

    const a = useContext(noteContext);

    // using useEffect to update the state

    useEffect(() => {

      a.update();
     
    }, [])
    
  return (
    <div>
        <div className='useSelecter_container'>
        <h2>Updated Count : {value} </h2>
        <h3>Hello My name is : {a.state.name} <br /> Profession is : {a.state.work} </h3>
        </div>

        <Link to="/">Home page</Link>

    </div>
  )
}

export default Testing