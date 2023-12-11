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
                            I'm a passionate web developer hailing from the West Midlands, where my love for technology and IT has been a driving force in my journey. From crafting my own software and projects to 
                            delving into the world of spreadsheets, I find joy in transforming complex tasks into streamlined, understandable processes. As someone who appreciates the art of spreadsheets, I thrive 
                            on simplifying and organising information.  
                        </p>
                        <p>
                            Beyond the world of code, I proudly embrace classic nerd stereotypes, including indulging in D&D and being big fan of sci-fi. When I'm not in work mode, you can often catch me diving into
                            online gaming with friends. It's not just a hobby—it's my go-to way to hang out and stay connected with buddies scattered across the map.  
                        </p>
                    </div>
                    <div className='my-coding'>
                        <h2>Professional Journey & Expertise</h2>
                    <p>
                        I hold a bachelor's degree in Multiplayer Online Games Design from Staffordshire University and have ventured into the dynamic realm of the Digital Marketing Industry, taking on roles both as 
                        a Paid Search expert and a Senior IT Manager. 
                    </p>
                    <p>
                        Recently, I've been immersing myself in the fascinating world of the CI/CD process for software development. I set up my own virtual servers, complete with a Jenkins build server, a Docker image
                        repository, and an app server running my applications in Dockerized containers. Witnessing the streamlined update process for my apps has been immensely satisfying. My Jenkins server automatically
                        rebuilds and deploys each app whenever changes are pushed to the main branch on GitHub. 
                    </p>
                    <p>
                        Reflecting on my diverse experiences, I realize my strengths lie in being multifaceted, yet I'm gearing up to specialise in Javascript programming. I am eager to leverage these skills to make 
                        meaningful contributions as a full stack developer focusing on React and Node.js.  
                    </p>

                    </div>
                    <SocialLinks />
                </div> 
            </main>
               
        </div>
    );
}