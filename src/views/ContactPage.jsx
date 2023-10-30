import '../styles/contactPage.css';
import ContactForm from '../components/ContactForm';
import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';

export default function ContactPage() {

    const [formWasSubmitted, setFormWasSubmitted] = useState(false);

    const formSubmitted = () => {
        setFormWasSubmitted(true);
    }

    return(
        <div className='main'>
            <main>
                <div className='content-box contact-me-page'>
                    <h1>Contact Me</h1>
                    {!formWasSubmitted && <p>Please fill out the form below to get in contact.</p>}
                    <ContactForm onFormSubmit={formSubmitted} />
                    <SocialLinks />
                </div>
            </main>
        </div>
    );
}