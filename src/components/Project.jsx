import '../styles/project.css';
import ListBlock from '../components/ListBlock';

export default function Project(props) {
    return(
        <>
            <div className='project-card'>

                <div className='project-card-header'>
                    <h2 className='project-title'>{props.name}</h2>
                    <div className='project-links'>
                        <a href={props.github}>View on GitHub</a> 
                        {props.liveUrl && <a href={props.liveUrl}>Visit Live Project</a>}
                    </div>
                </div>

                <div className='project-image-container'>
                    <img src={props.image} />
                </div>

                <div className='project-info'>
                    <ListBlock list={props.skills} />
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    );
}

// name={expensifyProject.name} 
// skills={expensifyProject.skills} 
// image={expensifyProject.image} 
// github={expensifyProject.github}
// liveUrl={expensifyProject.liveUrl}
// description={expensifyProject.description}

{/* <h2>Expensify App</h2>
    <div style={{display:'flex'}}>
        <div style={{'max-width':'20em'}}>
            <img src={projectIcon} width="200em" alt="app picture" height="200em" border="1px"></img>
            <ListBlock list={['Firebase','Javascript','Node.js','React']} />
        </div>
        <div>
            <a href='#'>View on GitHub</a> // <a href='#'>Visit Live Project</a>
            <p>Here is a description of my app. This would talk about the experience and technology used in the app.</p>
        </div>
    </div> */}