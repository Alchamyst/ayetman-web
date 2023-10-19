import '../styles/projectsPage.css';
import ProjectsList from '../components/ProjectsList';

export default function ProjectsPage() {
    return(
        <div className='main'>
            <main>
                <div className='content-box'>
                    <h1 className='projects-page-title'>My Projects</h1>
                    <p className='projects-page-description'>Below are personal projects I have worked on, along with their source code.</p>
                    <p className='projects-page-description'>There is a button to view the source code for each project on github, and some projects have a button for viewing the live version where available.</p>
                </div>
                <ProjectsList />
            </main>
        </div>
    );
}