import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-messages-es";

import Navbar from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import CalendarModal from "./CalendarModal";
import { AddNewFab } from "../ui/AddNewFab";

import moment from "moment";
import "moment/locale/es";
import { uiOpenModal } from "../../actions/ui";


moment.locale("es");
const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Christmas",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgcolor: "#ffffff",
    notes: "Ttitle Test",
    user: {
      _id: "123",
      name: "Damian",
    },
  },
];

const CalendarScreen = () => {
  
  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'month' );

  const dispatch = useDispatch(); 
  
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal())
  };

  const onSelectEvent = (e) => {
    console.log(e);
  };

  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem('lastView', e);
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
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal/>
      
      <AddNewFab/>
    </div>
  );
};
export default CalendarScreen;
