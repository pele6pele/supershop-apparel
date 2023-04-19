import React, { useState } from 'react'

import '../style/ContactUs.css'

import Image from '../images/pexels-mikhail-nilov-7682340.jpg'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)
  }

  return (
    <div className="form_body" id="contact_us">
      <div>
        <img src={Image} alt="contact us" className="form_image" />
      </div>

      <form onSubmit={handleSubmit}>
        <h1>Contact us</h1>
        <table>
          <tr>
            <td>
              <p>Name:</p>
            </td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <p> Email:</p>
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <p> Message:</p>
            </td>
            <td>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </td>
          </tr>
        </table>
        <div className="buttonDiv">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
