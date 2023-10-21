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
                        <div className='hey-img-box'>
                            <img className='ash-img' src={ashleyImg} alt="photo of Ashley." />
                            <h1>Hey, I'm Ashley.</h1>
                        </div>
                        <p>
                            A passionate web developer from the West Midlands, England. 
                            I'm on a mission to craft exceptional digital experiences, ignited by my journey through technology and marketing.
                        </p>
                        <p>
                            Join me on this exciting journey through the ever-evolving landscapes of JavaScript, Node.js, and React.  
                        </p>

                    </div>
                    {/* <div className='my-coding'>
                        <h2>My Technical Expertise</h2>
                    <p>
                        With a strong foundation in the fusion of IT and digital marketing, my journey has equipped me with a unique blend of skills. 
                        I bring a wealth of technical expertise and a profound understanding of the digital realm to the world of web development. 
                        My past roles have enabled me to collaborate effectively with development teams, shaping optimized user experiences that make a lasting impact. 
                        My dedication to staying at the forefront of industry trends makes me a valuable asset for web development roles, ready to tackle challenges and bring innovation to every project.
                    </p>
                    </div> */}
                </div> 
            </main>
            <SocialLinks />   
        </div>
    );
}