import '../styles/projectsList.css';
import Project from './Project';
// import ListBlock from '../components/ListBlock';
import projectIcon from '../assets/link-icon.svg';

export default function ProjectsList(props) {

    const expensifyProject = {
        name: "Expensify App",
        skills: ['Firebase','Javascript','Node.js','React'],
        image: projectIcon,
        github: "https://github.com/Alchamyst/expensify-app",
        liveUrl: '#',
        description: 'Here is a description of my app. This would talk about the experience and technology used in the app.'
    }

    return(
        <>
            <Project 
                name={expensifyProject.name} 
                skills={expensifyProject.skills} 
                image='' 
                // image={expensifyProject.image} 
                github={expensifyProject.github}
                liveUrl={expensifyProject.liveUrl}
                description={expensifyProject.description}
            />
        </>
    );
}