import React, { useRef, userRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactForm.css';
import { useState } from 'react';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useRef();

    const handleSubmit = (e) => {
        let validationSuccess = false;
        e.preventDefault();
        setError('');

        if(!name) {
            return setError('Name is empty. Please fill out your name.')
        }
        if(!phone && !email) {
            return setError('Please leave your email or a phone number.')            
        }
        if(!message) {
            return setError('Message is empty. Please type a message.')
        }

        // do validation checks

        // validationSuccess = true;
        setError('Sorry, form submissions are disabled right now.');

        if (validationSuccess) {
            emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData, import.meta.env.VITE_EMAILJS_PUBLIC_KEY )
            .then((result) => {
                console.log(result.text);
                setFormSubmitted(true);
            }, (error) => {
                setError(error);
            });   
        }
    }

    return(
        <div className='contact-form'>
            {!formSubmitted &&
            <form ref={form}>
                <label htmlFor='name'>Full Name</label>
                <input type='text' name='name' id='name' value={name} onChange={ (e) => setName(e.target.value)} />

                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' value={phone} onChange={ (e) => setphone(e.target.value)}/>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={email} onChange={ (e) => setEmail(e.target.value)}/>

                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' value={message} onChange={ (e) => setMessage(e.target.value)}/>

                {error && <p className="required">{error}</p>}

                <button type='submit' onClick={handleSubmit}>Send Message</button>
            </form>}
            {formSubmitted && <p className='success'>Thanks for your message. I'll get back to you soon.</p>}
        </div>
    );
}