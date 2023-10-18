import '../styles/experiencePage.css';
import ListBlock from '../components/ListBlock';
import HistoryList from '../components/HistoryList';
import myHistory from '../assets/myHistory.json';

const programmingSkills = ['Javascript','Google Apps Script','HTML5','CSS3'];
const frameworkSkills = ['React', 'Node.js','Jest','Handlebars'];
const webTechSkills = ['JSON', 'XML', 'RESTful APIs', 'Websockets'];
const databaseSkills = ['Firebase','MongoDB','MySQL'];

export default function ExperiencePage() {
    return(
        <div className='main'>
            <main className='content-box'>
                <div className='section-skills'>
                    <h1>Development Skills</h1>
                    <h2>Programming Languages</h2>
                    <ListBlock list={programmingSkills} />
                    <h2>Frameworks</h2>
                    <ListBlock list={frameworkSkills} />
                    <h2>Web Technologies</h2>
                    <ListBlock list={webTechSkills} />
                    <h2>Database Management</h2>
                    <ListBlock list={databaseSkills} />
                </div>

                <div className='section-history'>
                    <h1>My History</h1>
                    <HistoryList history={myHistory} />
                </div>

            </main>
        </div>
    );
}