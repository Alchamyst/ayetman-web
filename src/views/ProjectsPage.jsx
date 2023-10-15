import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box'>
                    <h1 className='projects-page-title'>My Projects</h1>
                    <p>Hey this is my projects page. here is a general idea of why this exists.</p>
                </div>
                <ProjectsList />
            </main>
        </div>
    );
}