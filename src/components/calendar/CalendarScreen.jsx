import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-messages-es";

import Navbar from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";

import moment from "moment";
import "moment/locale/es";
import { uiOpenModal } from "../../actions/ui";
import { eventClearActiveEvent, eventSetActive } from "../../actions/events";

moment.locale("es");
const localizer = momentLocalizer(moment);


const CalendarScreen = () => {
  
  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );
  
  const dispatch = useDispatch(); 
  const {events, activeEvent} = useSelector(state => state.calendar); 

  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  };

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e))
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
}


const onSelectSlot = (e) => {
  dispatch( eventClearActiveEvent() );
}


  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
      return {
        style,
      };
   };
  return (
    <div className="calendar-screen">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelectEvent }
        onView={ onViewChange }
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal/>
          {
            (activeEvent) && <DeleteEventFab />
          }
            
      <AddNewFab/>
    </div>
  );
};
export default CalendarScreen;
