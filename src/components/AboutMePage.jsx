import '../styles/aboutMePage.css';
import linkIcon from '../assets/link-icon.svg';

export default function AboutMePage() {
    return(
        <div className="main">
            <main>
                <h1>Hey, I'm Ashley.</h1>
                <p>
                    As a seasoned IT professional with recent expertise in PPC and SEO marketing, I've taken on various responsibilities. 
                    This includes proficiently managing pay-per-click accounts, providing technical support for Google Workspace users and 
                    IT equipment within the organization, and consulting with clients to implement diverse tracking code solutions.
                </p>
                <p>
                    My programming skills have been a continuous focus, particularly in JavaScript, while delving into Node.js and React to stay aligned with 
                    the latest industry developments. My commitment to professional growth remains strong, with plans to master React with TypeScript on the horizon, 
                    further enhancing my skillset.
                </p>
                <a href="#">This is a test link</a>
            </main>
        </div>
    );
}