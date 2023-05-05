import React from 'react' 
import './Contact.scss' 
import { useState, useRef } from 'react' 

function Contact() {
  const [name, setName] = useState('') 
  const [email, setEmail] = useState('') 
  const [message, setMessage] = useState('') 
  const [errorMsg, setErrorMsg] = useState('') 
  const nameRef = useRef() 

  const handleNameChange = (e) => {
    setName(e.target.value) 
  } 
  const handleEmailChange = (e) => {
    setEmail(e.target.value) 
  } 
  const handleMessageChange = (e) => {
    setMessage(e.target.value) 
  } 

  const validateAll = () => {
    const msg = {} 
    if (name.trim() === '') {
      msg.nameInput = '*Please enter your name' 
      nameRef.current.focus() 
    } else if (name.trim().split(' ').length < 2) {
      msg.nameInput = '*Please enter your full name (both first and last)' 
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    if (email.trim() === '') {
      msg.emailInput = '*Please enter your email' 
    } else if (!email.match(mailformat)) {
      msg.emailInput = '*Please enter a valid email address' 
    }

    if (message.trim() === '') {
      msg.messageInput = '*Please share something' 
    }

    setErrorMsg(msg) 
    if (msg.length > 0) {
      return false 
    } else return true 
  } 

  const handleSubmit = (e) => {
    e.preventDefault() 
    const isValidate = validateAll() 
    const data = {
      name,
      email,
      message,
    } 
    console.log(data) 
    if (!isValidate) return 
  } 

  return (
    <div className="contact">
      <div className="contact__bgr">

        <div className='contact_br_intro'>
         
          <h2 className='contact_br_title'>CONTACT WITH US</h2>
          <p className='contact_br_subtitle'>FOR MORE INFORMATION</p>
         
        </div>
      </div>
      <div className="contact_container">
        <div className="contact__content">
          <div className="contact_form">
            <h3>Get In Touch</h3>
            <form name="message__form" onSubmit={handleSubmit}>
              <div>
                <label className="form__label" htmlFor="name">
                  Your full name{' '}
                </label>
                <br />
                <input
                  className="form__input"
                  ref={nameRef}
                  id="name"
                  onChange={(e) => handleNameChange(e)}
                />
                <p className="form__errorMsg">{errorMsg.nameInput}</p>
              </div>
              <div>
                <label className="form__label" htmlFor="email">
                  Your email{' '}
                </label>
                <br />
                <input className="form__input" id="email" onChange={(e) => handleEmailChange(e)} />
                <p className="form__errorMsg">{errorMsg.emailInput}</p>
              </div>
              <div>
                <label className="form__label" htmlFor="message">
                  {' '}
                  Message{' '}
                </label>
                <textarea
                  className="form__textarea"
                  id="message"
                  onChange={(e) => handleMessageChange(e)}
                />
                <p className="form__errorMsg">{errorMsg.messageInput}</p>
              </div>
              <button className="form__submit__btn" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="contact_address">
            <div>
              <div className="contact_city">
                <h3>Ho Chi Minh</h3>
                <p>20/1B, Vo Van Hat, Long Truong, Thu Duc City</p>
                <p>Phone: 0909799154</p>
              </div>
              <div className="contact_city">
                <h3>Ha Noi</h3>
                <p>108, Nguyen Trai, Thuong Dinh, Thanh Xuan, Ha Noi City</p>
                <p>Phone: 0373615777</p>
              </div>
              <div className="contact_city">
                <h3>Da Nang</h3>
                <p>24 Tran Phu, Da Nang City</p>
                <p>Phone: 0918163030</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Contact 
