import { useState } from 'react'

const Contact = props => {
  const [errorMessage, setErrorMessage] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })  

  const {name, email, message} = contactForm

  const submitForm = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log('submitForm', contactForm)
    }
  }

  return (
    <section>
        <div className="container">
          <h1 className="text-center">Let's Connect!</h1>
          <p className="text-center">I am opened to network. Otherwise, if you have any questions or simply want to just say "Hi", please reach out and I will do my best to respond in a timely manner.</p>
          
          <form onSubmit={submitForm}>
      
            <div className="form-group mb-2">
              <label for="exampleFormControlInput1">Name</label>
              <input defaultValue={name} type="text" className="form-control" id="exampleFormControlInput1" placeholder="kaonou" />
            </div>

            <div className="form-group mb-2">
              <label for="exampleFormControlInput1">Email address</label>
              <input defaultValue={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
        
            <div className="form-group mb-3">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea defaultValue={message} className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder="Hi Kaonou!"></textarea>
            </div>
          </form>

          <a className="animate__animated animate__flipInX animate__slow" id="contactEmail" href="mailto:kaonou.her10@gmail.com">connect</a>
        </div>
    </section>
  )
}

export default Contact