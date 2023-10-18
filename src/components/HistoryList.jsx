import '../styles/historyList.css';
import { useState } from 'react';
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
                startDate={historyItem.startDate}
                endDate={historyItem.endDate}
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