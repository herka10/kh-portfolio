//import { useState } from 'react'

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
        <div className="container">
          <h1 className="text-center">Let's Connect!</h1> 
          <p className="text-center">If you have any questions or even simply want to just say "Hi", please reach out and I will do my best to respond in a timely manner.</p>
          <a id="contactEmail" href="mailto:kaonou.her10@gmail.com">Contact</a>
    
          

        </div>



      </form>
    </section>
    )
  }
  
  export default Contact