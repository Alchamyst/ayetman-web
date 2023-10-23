import '../styles/socialLinks.css';
import gitHubIcon from '../assets/socials/github_128.png';
import linkednnIcon from '../assets/socials/linkedin_128.png';

export default function SocialLinks(props) {
    return(
        <>
            <div className='social-links'>
                <div className='social-links-background'>
                    <a href="https://github.com/Alchamyst/"><img src={gitHubIcon} className='github-icon' alt='GitHub Logo' /></a>
                    <a href="https://www.linkedin.com/in/ashley-yetman/"><img src={linkednnIcon} className='linkedin-icon' alt='Linkedin Logo'/></a>
                </div>
            </div>
            {props.children}
        </>
    );
}