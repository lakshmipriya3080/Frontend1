import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import UserSidebar from '../../components/UserSidebar';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Vacation',
    start: new Date(2024, 1, 1),
    end: new Date(2024, 1, 5),
  },
  // Add more events as needed
];

const Leavemanagement = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  return (
<div className='grid-container'>
    
    <UserSidebar/> 
    <div align='center'>
    <div className='profile-box'>

    <h2 className='color'>LEAVE MANAGEMENT</h2>
     <div className='calender-container'>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={handleEventSelect}
      />
      {selectedEvent && (
        <div>
          <h2>{selectedEvent.title}</h2>
          <p>Start: {moment(selectedEvent.start).format('LLL')}</p>
          <p>End: {moment(selectedEvent.end).format('LLL')}</p>
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
  );
};

export default Leavemanagement;