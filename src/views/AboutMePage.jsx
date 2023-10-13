import SocialLinks from '../components/SocialLinks';
import '../styles/aboutMePage.css';

export default function AboutMePage() {
    return(
        <div className='main'>
            <main className='about-me'>
                <div className='about-me'>
                    <h1>Hey, I'm Ashley.</h1>

                    <p>
                        Hello, I'm Ashley, a driven web developer and digital strategist with a strong foundation in the dynamic landscape of IT and online marketing.  
                        My journey in the world of technology and marketing has equipped me with a unique blend of skills and insights.
                    </p>
                    <p>
                        When it comes to coding, my enthusiasm knows no bounds. JavaScript is my playground, and I thrive in the worlds of Node.js and React. 
                        These skills have empowered me to collaborate effectively with clients' development teams, crafting optimized user experiences that leave a lasting impression.
                    </p>
                </div>
                <SocialLinks />
            </main>
        </div>
    );
}