import '../styles/project.css';
import ListBlock from '../components/ListBlock';
import noImage from '../assets/no-image-placeholder.svg';

export default function Project(props) {
    return(
        <>
            <div className='project-card'>
                <div className='project-title'>
                    <h2>{props.name}</h2>
                </div>

                <div className='project-wrapper'>
                    <div className='project-info'>
                        <div className='project-image-container'>
                            {props.image && <img src={props.image} />}
                            {!props.image && <img src={noImage} />}
                        </div>
                        <div className='project-links'>
                            <a href={props.github}>View on GitHub</a> 
                            {props.liveUrl && <a href={props.liveUrl}>Visit Project</a>}
                        </div>
                    </div>

                    <div className='project-details'>
                        <div className='project-skills'>
                            <ListBlock list={['Firebase','Javascript','Node.js','React']} /> 
                        </div>
                        <div className='project-description'>  
                            <p>{props.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}