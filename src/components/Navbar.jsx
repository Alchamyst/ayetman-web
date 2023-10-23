import '../styles/navbar.css';

export default function Navbar(props) {

    const pageList = [
        { "path":"/", "label": "about-me" },
        { "path":"/experience", "label": "experience" },
        { "path":"/projects", "label": "projects" },
        { "path":"/contact", "label": "contact" },
    ];

    const navLinks = pageList.map( (page) => {
        if( page.path == window.location.pathname){
            return (<li key={page.path}><a href={page.path} className='current-page'>&lt;{page.label}&gt;</a></li>)    
        }
        return (<li key={page.path}><a href={page.path}>&lt;{page.label}&gt;</a></li>)
    });

    return(
        <nav>
            <ul>{navLinks}</ul>
        </nav>
    );
}