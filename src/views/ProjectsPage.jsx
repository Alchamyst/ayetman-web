import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className="main">
            <main>
                <h1 className='projects-page-title'>My Projects</h1>
                <ProjectsList />
            </main>
        </div>
    );
}