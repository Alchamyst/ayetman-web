import '../styles/contactPage.css';
import ContactForm from './ContactForm';

export default function ContactPage() {
    return(
        <div className="main">
            <main>
                <h1>Contact Me</h1>
                <p>Please fill out the form below or visit my <a href='https://www.linkedin.com/in/ashley-yetman/'>LinkedIn</a> profile to get in contact.</p>
                <ContactForm />
            </main>
        </div>
    );
}