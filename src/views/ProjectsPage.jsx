import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className="main">
            <main>
                <h1>My Projects</h1>
                <ProjectsList />
            </main>
        </div>
    );
}