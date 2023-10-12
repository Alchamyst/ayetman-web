import '../styles/experiencePage.css';
import SkillList from './SkillList';

const programmingSkills = ['CSS3','Google Apps Script','HTML5','Javascript'];
const frameworkSkills = ['React', 'Node.js'];
const webTechSkills = ['JSON','RESTful APIs', 'Websockets','XML'];
const databaseSkills = ['Firebase','MongoDB','MySQL'];

export default function ExperiencePage() {
    return(
        <div className='main'>
            <main>
                <div class='section-skills'>
                    <h1>Skills Portfolio</h1>
                    <h2>Programming Languages</h2>
                    <SkillList skills={programmingSkills} />
                    <h2>Frameworks</h2>
                    <SkillList skills={frameworkSkills} />
                    <h2>Web Technologies</h2>
                    <SkillList skills={webTechSkills} />
                    <h2>Database Management</h2>
                    <SkillList skills={databaseSkills} />
                </div>

                <div class='section-education'>
                    <h1>Education</h1>
                    <table class='exp'>
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