import '../styles/socialLinks.css';
import gitHubIcon from '../assets/socials/github.svg';
import linkednnIcon from '../assets/socials/linkedin.png';

export default function SocialLinks(props) {
    return(
        <>
            <div className='social-links'>
                <a href="https://github.com/Alchamyst/"><img src={gitHubIcon} className='github-icon' alt='GitHub Logo' /></a>
                <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linkednnIcon} className='linkedin-icon' alt='Linkedin Logo'/></a>
            </div>
            {props.children}
        </>
    );
}