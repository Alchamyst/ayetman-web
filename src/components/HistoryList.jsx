import '../styles/historyList.css';
import HistoryListItem from './HistoryListItem';

export default function HistoryList(props) {

    const historylist = props.history.map ( ( historyItem ) => {
        const key = historyItem.organisation + historyItem.startYearMonth + historyItem.endYearMonth;
        return ( 
            <HistoryListItem 
                key={key} 
                organisation={historyItem.organisation} 
                designation={historyItem.designation}
                startYearMonth={historyItem.startYearMonth}
                endYearMonth={historyItem.endYearMonth}
                description={historyItem.description}
            />
        );
    })

    return(
        <div className='history-list'>
            { historylist }         
        </div>
    );
}   