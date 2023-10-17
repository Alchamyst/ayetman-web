import '../styles/historyListItem.css';

export default function HistoryListItem(props) {
    return (
        <div className='history-list-item'>
            <div className='history-compact'>
                <div className='history-titles'>
                    <p className='history-designation'>{props.designation}</p>
                    <p className='history-organisation'>{props.organisation}</p>
                </div>
                <div className='history-dates'>
                    <p className='history-start-date'>{props.startYearMonth}</p>
                    <p className='history-end-date'>{props.endYearMonth}</p>
                </div>
            </div>
            <div className='history-expanded'>
                <div className='history-description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}