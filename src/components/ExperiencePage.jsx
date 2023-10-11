import '../styles/experiencePage.css';

export default function ExperiencePage() {
    return(
        <div className="main">
            <main>
                <p>My professional summary will be written here.</p>
                <div class="section-skills">
                    <h1>Technology I Work With</h1>
                    <h2>Programming Languages</h2>
                    <ul>
                        <li>Javascript</li>
                        <li>Google Apps Script</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Unrealscript</li>
                    </ul>
                    <h2>Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                    </ul>
                    <h2>Web Technologies</h2>
                    <ul>
                        <li>JSON</li>
                        <li>RESTful APIs</li>
                        <li>Websockets</li>
                        <li>XML</li>
                    </ul>
                    <h2>Database Management</h2>
                    <ul>
                        <li>Firebase</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
                <div class="section-education">
                    <h1>Education</h1>
                    <table class="exp">
                        <thead>
                            <tr>
                                <th>Institute</th>
                                <th>Qualification</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Staffordshire University</th>
                                <th>BSc Multiplayer Online Games Design</th>
                            </tr>
                            <tr>
                                <th>Evesham College</th>
                                <th>BTEC National Diploma for IT Practitioners</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="section-history">
                    <h1>Employment History</h1>
                    <table class="exp">
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Role</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Ocere Ltd.</th>
                                <th>Paid Search Manager</th>
                                <th>4 Years, 9 Months</th>
                            </tr>
                            <tr>
                                <th>Ocere Ltd.</th>
                                <th>Digital Marketing Executive</th>
                                <th>3 Years, 10 Months</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}