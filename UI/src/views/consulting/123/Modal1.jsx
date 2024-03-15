import React from "react";

const Modal = ({ year, month, selectedDate, showModal, closeModal, handleRegisterClick }) => {
  return (
    showModal && (
      <div className="Calendermodal">
        <div className="modal-content">
          <h2>
            {`${year}년 ${month}월 ${selectedDate.getDate()}일`}
            <br />
            시간표 등록
          </h2>
          <div className="checkboxes">
            {[...Array(9)].map((_, index) => {
              if (index === 4) return null; // 13시는 제외
              const startTime = ("0" + (9 + index)).slice(-2) + ":00";
              const endTime = ("0" + (9 + index)).slice(-2) + ":50";
              return (
                <div key={index} className="checkbox">
                  <label htmlFor={`timeSlot${index + 1}`}>{`${startTime} ~ ${endTime}`}</label>
                  <input type="checkbox" id={`timeSlot${index + 1}`} name={`timeSlot${index + 1}`} />
                </div>
              );
            })}
          </div>
          <div className="button-container">
            <button onClick={handleRegisterClick} className="register-button">
              등록
            </button>
            <button onClick={closeModal} className="close-button">
              닫기
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
