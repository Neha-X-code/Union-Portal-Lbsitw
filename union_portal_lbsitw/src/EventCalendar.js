import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  // Mock event data for demonstration
  const eventData = [
    { date: '2024-04-26', poster: 'poster1.jpg', content: 'Event 1 details...', organizer: 'Organizer 1' },
    { date: '2024-04-27', poster: 'poster2.jpg', content: 'Event 2 details...', organizer: 'Organizer 2' },
    // Add more event data as needed
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Find event details for the selected date
    const event = eventData.find((event) => event.date === formatDate(date));
    setSelectedEvent(event);
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  return (
    <div className="event-calendar">
      <div className="calendar-container">
        <Calendar
          value={selectedDate}
          onClickDay={handleDateClick}
          tileContent={({ date, view }) => {
            // Display dot for dates with events
            if (view === 'month') {
              const eventForDate = eventData.find((event) => event.date === formatDate(date));
              return eventForDate ? <div className="event-dot" /> : null;
            }
          }}
        />
      </div>
      <div className="event-details">
        {selectedEvent ? (
          <div className="event-details-container">
            <img src={selectedEvent.poster} alt="Event Poster" className="event-poster" />
            <div className="event-content">
              <h2>{selectedEvent.content}</h2>
              <p>Organized by: {selectedEvent.organizer}</p>
            </div>
          </div>
        ) : (
          <div className="no-event-selected">No event selected</div>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
