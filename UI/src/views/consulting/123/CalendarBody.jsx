import React from "react";

const CalendarBody = ({ year, month, handleDateClick }) => {
  const getFirstLastDayOfMonth = () => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    return { firstDayOfMonth, lastDayOfMonth };
  };

  const generateCalendar = () => {
    const { firstDayOfMonth, lastDayOfMonth } = getFirstLastDayOfMonth();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const lastDateOfMonth = lastDayOfMonth.getDate();
    const calendar = [];

    let date = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfWeek) {
          week.push(<td key={j}></td>);
        } else if (date > lastDateOfMonth) {
          break;
        } else {
          const currentDate = new Date(year, month - 1, date);
          week.push(
            <td key={j} onClick={() => handleDateClick(currentDate)}>
              {date}
            </td>
          );
          date++;
        }
      }

      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return <tbody>{generateCalendar()}</tbody>;
};

export default CalendarBody;
