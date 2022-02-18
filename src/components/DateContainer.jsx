import React, { useState } from 'react';
import './date.css';
import DateDisplay from './DateDisplay';

const DateContainer = () => {
    const [date, setDate] = useState(Date.now());
    console.log(date);

    return (
        <div className="date-container">
            <input type="datetime-local" className="date-input" onChange={(e) => setDate(e.target.value)} />
            <DateDisplay date={date} />
        </div>
    )
}

export default DateContainer;