import React, { useState } from "react";
import Calendar from "./Calendar";
import "../scss/Calendar.scss";

const CalendarContainer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleYearChange = (event) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event) => {
    setMonth(parseInt(event.target.value));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  const handleRegisterClick = () => {
    // 등록 버튼을 눌렀을 때 처리하는 코드 작성
    // 서버로 데이터를 보내거나 다른 작업을 수행할 수 있습니다.
    // handleRegisterClick 함수 내에 구현한 내용을 여기에 넣어주세요.
  };

  return (
    <Calendar
      year={year}
      month={month}
      handleYearChange={handleYearChange}
      handleMonthChange={handleMonthChange}
      handleDateClick={handleDateClick}
      selectedDate={selectedDate}
      showModal={showModal}
      closeModal={closeModal}
      handleRegisterClick={handleRegisterClick}
    />
  );
};

export default CalendarContainer;
