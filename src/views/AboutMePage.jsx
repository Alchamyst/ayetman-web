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
                            I'm a passionate web developer from the West Midlands. Since university, I've continually refined my skills while navigating roles in the digital marketing industry. Applying my expertise in JavaScript, I've 
                            created advanced Google Sheets infused with code to streamline tasks, and separately, harnessed React and Node.js to develop practical web applications. At my essence, I thrive in problem-solving and 
                            innovation, enjoying transforming intricate tasks into streamlined, user-friendly processes.  
                        </p>
                        <p>
                            Beyond the world of code, I wholeheartedly embrace classic nerd stereotypes. I enjoy a variety of sci-fi and fantasy TV shows/movies, I am blessed enough to have a weekly Dungeons & Dragons session
                            with friends, and I'm an avid enthusiast of video games &#8211; a shared passion that serves as a delightful backdrop for socialising with friends.
                        </p>
                    </div>
                    <div className='my-coding'>
                        <h2>Professional Journey & Expertise</h2>
                    <p>
                        I have a bachelor's degree in Multiplayer Online Games Design from Staffordshire University and have ventured into the dynamic realm of the Digital Marketing Industry, taking on roles both as a Paid Search Manager
                        and a Senior IT Manager.
                    </p>
                    <p>
                        Recently, I've delved into the CI/CD process for software development. Following the setup of my own virtual servers, I crafted Jenkins pipelines to streamline the build and deployment workflows for various projects
                        in my portfolio. This included configuring a Jenkins build server, establishing a Docker image repository, and running my applications in Dockerized containers on an app server. Witnessing the seamless update process, 
                        where my Jenkins server automatically rebuilds and deploys each application upon changes to the relevant GitHub branch, has been immensely satisfying.
                    </p>
                    <p>
                        Reflecting on my diverse experiences, I realise my many strengths lie in being multifaceted, but I plan to continue specialising in JavaScript programming as my main focus. I am eager to work within the web development
                        industry as a full stack developer focusing on React and Node.js, with a capability of taking on the DevOps role.
                    </p>

                    </div>
                    <SocialLinks />
                </div> 
            </main>
               
        </div>
    );
}