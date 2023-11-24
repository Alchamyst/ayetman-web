import '../styles/aboutMePage.css';
import SocialLinks from '../components/SocialLinks';
import ashleyImg from '../assets/ashley.jpg';

export default function AboutMePage() {
    return(/* display: flex; */
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* justify-content:flex-start; */
        <div className='main'>
            <main>
                <div className='home-page content-box'>
                    <div className='about-me'>
                        <h1>Hey, I'm Ashley.</h1>
                        
                        <img className='ash-img' src={ashleyImg} alt="photo of Ashley." />
                            
                        <p>
                            I'm a passionate web developer from the West Midlands, England who is on a mission to craft exceptional digital experiences, ignited by my journey through technology and marketing.
                        </p>
                        <p>
                            Join me on this exciting journey through the ever-evolving landscapes of software development.  
                        </p>
                    </div>
                    <div className='my-coding'>
                        <h2>Embarking on the Code Voyage</h2>
                    <p>
                        With a strong foundation in the fusion of IT and digital marketing, my journey has equipped me with a unique blend of skills. 
                        While I'm still building my experience as a web developer, I bring a technical mindset and a deep understanding of the digital landscape to this evolving field.
                    </p>
                    <p>
                        My past roles have enabled me to collaborate effectively with development teams, shaping optimised user experiences that make a lasting impact. 
                        My dedication to staying at the forefront of industry trends makes me a valuable asset for web development roles, prepared to confront challenges and infuse innovation into each project.
                    </p>
                    </div>
                    <SocialLinks />
                </div> 
            </main>
               
        </div>
    );
}