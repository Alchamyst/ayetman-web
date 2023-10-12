import '../styles/contactForm.css';
import { useState } from 'react';

export default function ContactForm() {

    const [name, setName] = useState('');
    const [phone, setphone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        console.log(name, phone, email, message)

        if(!name) {
            return setError('Name is empty. Please fill out your name.')
        }
        if(!phone && !email) {
            return setError('Please leave your email or a phone number.')            
        }
        if(!message) {
            return setError('Message is empty. Please type a message.')
        }
        setFormSubmitted(true);

    }

    return(
        <div className='contact-form'>
            {!formSubmitted &&
            <form>
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
            {formSubmitted && <p className='success'>Form Submitted Successfully! <br />(This is placeholder text)</p>}
            {/* Thanks for your message. I'll get back to you as soon as I can! */}
        </div>
    );
}