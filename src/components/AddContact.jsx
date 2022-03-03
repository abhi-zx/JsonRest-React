import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const AddContact = (props) => {

    const [value, setValue]=useState({
    name:"",
    email:""
  })
  const handdelchange =(e)=>{
      const { name }= e.target;
      setValue({...value ,[name]:e.target.value
      })
     
  }
  const history= useNavigate()
  const add = (e)=>{
    e.preventDefault();
    if(value.email==""||value.name==""){

    
     alert("all fiels are mandatory")
     return
    }
    props.addContactHandller(value)
    setValue({name:'',email:""})
    console.log(props)
    
    history('/')
    
  }
  return (
   <>
   <form>
   
   <h3>Add COntact</h3>
   <label>Name</label>
   <input type="text" name='name' value={value.name} onChange={handdelchange}></input><br/><br/>
   <label>Email</label>
   <input type="text" name='email' value={value.email} onChange={handdelchange}></input><br/><br/>

   <button onClick={add}>Add</button>
   </form>
   </>
  )
}

export default AddContact