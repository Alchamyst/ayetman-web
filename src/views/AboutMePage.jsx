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
                            I'm a passionate web developer from the West Midlands. I've been deeply engrossed in software development throughout most of my life. From crafting my own software and projects to 
                            delving into the world of spreadsheets, I find joy in transforming complex tasks into streamlined, understandable processes. As someone who appreciates the art of spreadsheets, I thrive 
                            on simplifying and organising information.  
                        </p>
                        <p>
                            Beyond the world of code, I proudly embrace classic nerd stereotypes, from D&D with friends to niche fan festival events. When I'm not in work mode, you can often catch me diving into
                            online gaming as my go-to way to hang out and stay connected with friends scattered across the world.  
                        </p>
                    </div>
                    <div className='my-coding'>
                        <h2>Professional Journey & Expertise</h2>
                    <p>
                        I have a bachelor's degree in Multiplayer Online Games Design from Staffordshire University and have ventured into the dynamic realm of the Digital Marketing Industry, taking on roles both as 
                        a Paid Search Manager and a Senior IT Manager. 
                    </p>
                    <p>
                        Recently, I've been immersing myself in the CI/CD process for software development. I set up my own virtual servers, complete with a Jenkins build server, a Docker image
                        repository, and an app server running my applications in Dockerized containers. Witnessing the streamlined update process for my apps has been immensely satisfying. My Jenkins server automatically
                        rebuilds and deploys each app whenever changes are pushed to the main branch on GitHub. 
                    </p>
                    <p>
                        Reflecting on my diverse experiences, I realise my many strengths lie in being multifaceted, but I plan to continue specialising in Javascript programming as my main focus. I am eager to work within the 
                        web development industry as a full stack developer focusing on React and Node.js, with a capability of taking on the DevOps role.
                    </p>

                    </div>
                    <SocialLinks />
                </div> 
            </main>
               
        </div>
    );
}