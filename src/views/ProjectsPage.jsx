import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box'>
                    <h1 className='projects-page-title'>My Projects</h1>
                    <p className='projects-page-description'>Here, you'll find a glimpse of my personal coding projects, complete with links to the source code and, whenever feasible, the live application for direct exploration.</p>
                </div>
                <ProjectsList />
            </main>
        </div>
    );
}