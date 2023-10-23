import '../styles/contactPage.css';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box contact-me-page'>
                    <h1>Contact Me</h1>
                    <p>Please fill out the form below to get in contact.</p>
                    <ContactForm />
                </div>
            </main>
        </div>
    );
}