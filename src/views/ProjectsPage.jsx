import '../styles/projectsPage.css';
import ListBlock from '../components/ListBlock';
import projectIcon from '../assets/link-icon.svg';

export default function ProjectsPage() {
    return(
        <div className="main">
            <main>
                <p>This is my ProjectsPage component.</p>
                <h2>Expensify App</h2>
                <div style={{display:'flex'}}>
                    <div style={{'max-width':'20em'}}>
                        <img src={projectIcon} width="200em" alt="app picture" height="200em" border="1px"></img>
                        <ListBlock list={['Firebase','Javascript','Node.js','React']} />
                    </div>
                    <div>
                        <a href='#'>View on GitHub</a> // <a href='#'>Visit Live Project</a>
                        <p>Here is a description of my app. This would talk about the experience and technology used in the app.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}