import './contact.css';
import {useState} from 'react'
import axios from 'axios'

const Contact = () => {

    const [FirstName,setFirstName] = useState([])
    const [LastName,setLastName] = useState([])
    const [Email,setEmail] = useState([])
    const [Message,setMessage] = useState([])
  

const handleClick = ()=>{
    
   
        Credential ={
            FirstName ,
            LastName ,
            Email ,
            Message
            
        }
        axios.post('http://127.0.0.1:8000/contact_form/',Credential).then(
            res=>{
               console.log(res)
            }
        )
  
}
    return ( 
            <div class="container">
	<h3>Contact Form</h3>
	
		<label for="first_name">First Name</label>
		<input name="first_name" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} type="text" required placeholder="John"/>
		<br/>
		<label for="last_name">Last Name</label>
		<input name="last_name" value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" required placeholder="Doe"/>
		<br/>
		<label for="email">Email</label>
		<input name="email" value={Email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="you@domain.com"/>
		<br/>
		<label for="message">Message</label><br/>
		<textarea name="message" value={Message} onChange={(e)=>setMessage(e.target.value)} cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
		<div class="center">
			<input type="submit" onClick={()=>handleClick()} />
		</div>
	
</div>

    );

    }
export default Contact ;