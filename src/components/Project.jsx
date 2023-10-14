import '../styles/project.css';
import ListBlock from '../components/ListBlock';
import noImage from '../assets/js-logo.svg';

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
                            {props.image && <img src={new URL(`../assets/project-images/${props.image}`, import.meta.url).href} />}
                            {!props.image && <img src={noImage} />}
                        </div>
                        <div className='project-links'>
                            <a href={props.github}>GitHub &#x29c9;</a> 
                            {props.liveUrl && <a href={props.liveUrl}>Live Project &#x29c9;</a>}
                        </div>
                    </div>

                    <div className='project-details'>
                        <div className='project-skills'>
                            <ListBlock list={props.skills} /> 
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

