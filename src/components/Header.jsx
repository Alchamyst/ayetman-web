import '../styles/header.css';

export default function Header(props) {
    return(
        <div className='header-bg'>
            <div className='header-wrapper'>
                <div className='header'>
                    <div className='site-title'>
                        <a href='/'>
                            <h3>&lt;Alchamyst/&gt;</h3>
                            <h4>Ashley Yetman</h4>
                        </a> 
                    </div>    
                           
                    {props.children}
                </div>
            </div>
        </div>
    );
}