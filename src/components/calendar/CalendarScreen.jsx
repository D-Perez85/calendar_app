import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
moment.locale('es');


const localizer = momentLocalizer(moment);
const events  =[{
  title: 'Christmas',
  start: moment().toDate(),
  end: moment().add(2, 'hours').toDate(),
  bgcolor: '#ffffff',
}]
const CalendarScreen = () => {
  return (
    <div className='calendar-screen'>
        <Navbar/>
        <Calendar
                localizer={ localizer }
                events={events}
                startAccessor="start"
                endAccessor="end" 
                messages={messages}           
            />

    </div>
  )
}
    export default CalendarScreen;
