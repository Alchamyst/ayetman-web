import '../styles/listBlock.css';

export default function ListBlock(props) {

    if (!props.list) return (<p>Error: Missing 'list' in props.</p>);

    const listData = props.list.map((list) => <li key={list}>{list}</li>)

    return(
        <div className='skill-list'>
            <ul>{listData}</ul>
            {props.children}
        </div>
    );
}