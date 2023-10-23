import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box'>
                    <h1 className='projects-page-title'>My Projects</h1>
                    <p className='projects-page-description'>Within this portfolio, you'll discover a selection of my personal coding projects, each accompanied by links to both the source code and, where available, the live application for direct exploration.</p>
                </div>
                <ProjectsList />
            </main>
        </div>
    );
}