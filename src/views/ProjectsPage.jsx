import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box'>
                    <h1 className='projects-page-title'>My Projects</h1>
                    <p className='projects-page-description'>Below are a sample of my personal projects, along with links to the source code and the live project where available.</p>
                </div>
                <ProjectsList />
            </main>
        </div>
    );
}