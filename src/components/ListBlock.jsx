import '../styles/listBlocks.css';

export default function ListBlocks(props) {
    const listData = props.list.map((list) => <li key={list}>{list}</li>)

    return(
        <div className='skill-list'>
            <ul>{listData}</ul>
            {props.children}
        </div>
    );
}