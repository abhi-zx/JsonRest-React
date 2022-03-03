import React from 'react'
import './App.css'
const ContactCard = (props) => {
  const { name, email,id } = props.contact
  const remove = (e)=>{
    // console.log(id)
    props.clickHandller(id)
    
  }
  return (
    <div className="container">
      <div className="card">
        <div>
          <h1>List</h1>
          <p>{name}</p>
          <p>{email}</p>
          {/* <p>{id}</p> */}
          </div>
        <div>
          <button onClick={remove} className="btn">Remove</button>
        </div>
      </div>

    </div>


  )
}

export default ContactCard