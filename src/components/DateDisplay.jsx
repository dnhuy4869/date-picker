import React from 'react';
import moment from 'moment';

const DateDisplay = ({ date }) => {
    return (
        <section className="date-display">
            My date is: {moment(date).format('YYYY-MM-DD hh:mm')}
        </section>
    )
}

export default DateDisplay;