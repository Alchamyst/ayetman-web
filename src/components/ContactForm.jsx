import React, { useRef, userRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contactForm.css';
import { useState } from 'react';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [honeyPot, sethoneyPot] = useState('');

    const [error, setError] = useState('');

    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if(honeyPot) return setFormSubmitted(true);  

        const formValidated = checkFormValidation(name, phone, email, message);

        if (formValidated) {
            setFormSubmitted(true);
            console.log(`Updated! formSubmitted=${formSubmitted}`);

            // emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY )
            // .then((result) => {
            //     console.log(result.text);
            //     setFormSubmitted(true);
            // }, (error) => {
            //     setError(error);
            // });   
        }


    }

    const checkFormValidation = (name, phone, email, message) => {
        console.log(`name=${name} phone=${phone} email=${email} message=${message}`);

        if(nameValidation(name) == false) return false;
        if(phoneValidation(phone) == false) return false;
        if(emailValidation(email) == false) return false;
        if(messageValidation(message) == false) return false;

        return true;
    }

    const nameValidation = (name) => {
        if( !name ) {
            setError('Name is empty. Please fill out your name.');
            return false;
        } 

        if( String(name).length > 50 ) {
            setError('Name too long. Please shorten to 50 chars or less.');
            return false;
        }

        return true;  
    } 

    const phoneValidation = (phone) => {
        const phoneRegex  = new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");

        if(!phone) return true;   

        if(!phoneRegex.test(phone)) {
            setError('Please enter a valid phone number, with no spaces.');
            return false; 
        } 

        return true;      
    }

    const emailValidation = (email) => {
        // const emailRegex  = new RegExp("^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");

        const emailRegex  = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!email) {
            setError('Please enter your email.');  
            return false;  
        }

        if(!String(email).toLowerCase().match(emailRegex)){
            setError('Please enter a valid email.');  
            return false;  
        }

        // if(!emailRegex.test(email)) {
        //     setError('Please enter a valid email.');
        //     return false; 
        // } 
        
        return true; 
    }

    const messageValidation = (message) => {
        if(!message) {
            setError('Message is empty. Please type a message.');
            return false
        }

        return true; 
    }

    return (
        <div className='contact-form'>
            {!formSubmitted &&
            <form ref={form}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' name='name' id='name' value={name} onChange={ (e) => setName(e.target.value)} />

                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' name='phone' id='phone' value={phone} onChange={ (e) => setphone(e.target.value)}/>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={email} onChange={ (e) => setEmail(e.target.value)}/>

                <input type='hidden' name='work-email' id='work-email' value={honeyPot}  onChange={ (e) => sethoneyPot(e.target.value)}/>

                <label htmlFor='message'>Message</label>
                <textarea name='message' id='message' value={message} onChange={ (e) => setMessage(e.target.value)}/>

                {error && <p className="required">{error}</p>}

                <button type='submit' onClick={handleSubmit}>Send Message</button>
            </form>}
            {formSubmitted && <p className='success'>Thanks for your message. I'll get back to you soon.</p>}
        </div>
    );
}