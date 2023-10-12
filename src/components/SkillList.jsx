import '../styles/skillList.css';

export default function skillList(props) {
    const skillsData = props.skills.map((skill) => <li>{skill}</li>)

    return(
        <div className='skill-list'>
            <ul>{skillsData}</ul>
            {props.children}
        </div>
    );
}