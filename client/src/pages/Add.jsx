import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function Add() {

  //taking values form the inputs

  const [record, setRecord]=useState({
    artist: '',
    title: '',
    label: '',
    cover: '',
    genre: '',
    year: '',
    price: null,
    
  })

  const navigate = useNavigate()


  const handleChange = (e) =>{
    setRecord(prev=>({...prev,[e.target.name]: e.target.value}))
  }

  const handleClick = async e =>{
    e.preventDefault()
      try{
        await axios.post("http://localhost:8800/records", record)
        navigate('/')
      }
      catch(err){
        console.log(err)
        }
  }

  console.log(record)

// the name in the input syntax nedd to be the same as in a const [record, setRecord]
  return (
    <div className='form'>
      <h1>Add New Record</h1>
      
      <input type='text' placeholder='artist' onChange={handleChange} name='artist'></input>
      <input type='text' placeholder='title' onChange={handleChange} name='title'></input>
      <input type='text' placeholder='label' onChange={handleChange} name='label'></input>
      <input type='text' placeholder='cover' onChange={handleChange} name='cover'></input>
      <input type='text' placeholder='genre' onChange={handleChange} name='genre'></input>
      <input type='text' placeholder='year' onChange={handleChange} name='year'></input>
      <input type='number' placeholder='price' onChange={handleChange} name='price'></input>
      <button className='form-button' onClick={handleClick} >Add</button>
    </div>
  )
}

export default Add