import '../styles/experiencePage.css';
import ListBlock from '../components/ListBlock';
import HistoryList from '../components/HistoryList';
import myHistory from '../assets/myHistory.json';
import SocialLinks from '../components/SocialLinks';

const programmingSkills = ['TypeScript','JavaScript','Google Apps Script','HTML5','CSS3'];
const frameworkSkills = ['React', 'Node.js','Jest','Web Sockets','Handlebars'];
const databaseSkills = ['Firebase','MongoDB','MySQL'];
const devToolsSkills = ['Git', 'Vite', 'Docker', 'Jenkins', 'Webpack', 'Postman'];

export default function ExperiencePage() {
    return(
        <div className='main'>
            <main >
                <div className='content-box'>
                    <div className='section-skills'>
                        <h1>Development Skills</h1>
                        <h2>Languages</h2>
                        <ListBlock list={programmingSkills} />
                        <h2>Frameworks</h2>
                        <ListBlock list={frameworkSkills} />
                        <h2>Databases</h2>
                        <ListBlock list={databaseSkills} />
                        <h2>Development Tools</h2>
                        <ListBlock list={devToolsSkills} />
                    </div>

                    <div className='section-history'>
                        <h1>My History</h1>
                        <HistoryList history={myHistory} />
                    </div>
                    <SocialLinks />
                </div>

            </main>
        </div>
    );
}