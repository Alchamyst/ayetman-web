import '../styles/experiencePage.css';
import ListBlock from '../components/ListBlock';

const programmingSkills = ['Javascript','Google Apps Script','HTML5','CSS3'];
const frameworkSkills = ['React', 'Node.js','Jest','Handlebars'];
const webTechSkills = ['JSON', 'XML', 'RESTful APIs', 'Websockets'];
const databaseSkills = ['Firebase','MongoDB','MySQL'];

export default function ExperiencePage() {
    return(
        <div className='main'>
            <main>
                <div className='section-skills'>
                    <h1>Skills Portfolio</h1>
                    <h2>Programming Languages</h2>
                    <ListBlock list={programmingSkills} />
                    <h2>Frameworks</h2>
                    <ListBlock list={frameworkSkills} />
                    <h2>Web Technologies</h2>
                    <ListBlock list={webTechSkills} />
                    <h2>Database Management</h2>
                    <ListBlock list={databaseSkills} />
                </div>

                <div className='section-education'>
                    <h1>Education</h1>
                    <table className='exp'>
                        <thead>
                            <tr>
                                <th>Institute</th>
                                <th>Qualification</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Staffordshire University</th>
                                <th>BSc Multiplayer Online Games Design</th>
                                <th>2011</th>
                            </tr>
                            <tr>
                                <th>Evesham College</th>
                                <th>BTEC National Diploma for IT Practitioners</th>
                                <th>2008</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </main>
        </div>
    );
}