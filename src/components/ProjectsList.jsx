import '../styles/projectsList.css';
import Project from './Project';
import projects from '../assets/projects.json';

export default function ProjectsList() {

    const projectsData = projects.map( (project) => {

        return (<Project 
            key={project.name}
            name={project.name} 
            skills={project.skills} 
            image={project.image} 
            github={project.github}
            liveUrl={project.liveUrl}
            description1={project.description1}
            description2={project.description2}
        />)
    });

    return(
        <>
            {projectsData}
        </>
    );
}