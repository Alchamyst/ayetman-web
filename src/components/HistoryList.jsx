import '../styles/historyList.css';
import { createContext, useState } from 'react';
import HistoryListItem from './HistoryListItem';

export default function HistoryList(props) {

    const [ activeIndex, setActiveIndex ] = useState(0);

    const setActivePanel = (panelNumber) => {
        setActiveIndex(panelNumber);
    }

    const historylist = props.history.map ( ( historyItem , key = 0) => {  
        key++;

        return ( 
            <HistoryListItem 
                key={key} 
                id={key}
                organisation={historyItem.organisation} 
                designation={historyItem.designation}
                startYearMonth={historyItem.startYearMonth}
                endYearMonth={historyItem.endYearMonth}
                description={historyItem.description}
                isExpanded={activeIndex === key}
                setActivePanel={setActivePanel}
            />
        );
    });

    return(
        <div className='history-list'>
            { historylist }         
        </div>
    );
}   