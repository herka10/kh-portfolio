import { useState } from 'react'

const Contact = props => {
  // const [contactForm, setContactForm] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // })  

  
  return (
    <section>
      <form onSubmit={event => {
        event.preventDefault()
      }}>
        <div className="container input-group input-group-lg">
          <h1>Let's Connect!</h1> 
         
            <input>
          
            </input>
          

        </div>



      </form>
    </section>
    )
  }
  
  export default Contact