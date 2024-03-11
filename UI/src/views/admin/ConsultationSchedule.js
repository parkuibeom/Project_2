import React, { useEffect, useState } from "react";
import "../../scss/ConsultationItem.scss"; // Test.scss 파일을 import합니다.

const ConsultationSchedule = () => {
  // 상태 변수들을 선언합니다.
  const [schedules, setschedules] = useState([]); // 상담 항목 데이터를 저장할 상태 변수
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 저장할 상태 변수
  const [searchTermItem, setSearchTermItem] = useState(""); // 상담 항목 검색어를 저장할 상태 변수
  const [searchTermDate, setSearchTermDate] = useState(""); // 상담원 이름 검색어를 저장할 상태 변수
  const [searchTermTime, setSearchTermTime] = useState(""); // 상담 시간 검색어를 저장할 상태 변수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 저장할 상태 변수
  const [perPage] = useState(10); // 한 페이지당 표시할 항목 수
  const [maxPageButtons] = useState(4); // 최대 표시할 페이지 버튼 수

  // 페이지가 변경될 때마다 데이터를 가져오는 함수를 실행합니다.
  useEffect(() => {
    fetchData();
  }, [currentPage]); // currentPage가 변경될 때마다 실행됩니다.

  // API에서 데이터를 가져오는 비동기 함수입니다.
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8181/cbb/consulting/schedules`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setschedules(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 검색어를 변경하는 함수입니다.
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchItem = (event) => {
    setSearchTermItem(event.target.value);
    console.log(event.target.value);
  };

  const handleSearchTime = (event) => {
    setSearchTermTime(event.target.value);
  };

  const handleSearchDate = (event) => {
    setSearchTermDate(event.target.value);
  };

  // 이전 페이지로 이동하는 함수입니다.
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // 다음 페이지로 이동하는 함수입니다.
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // 페이지 번호를 클릭했을 때 해당 페이지로 이동하는 함수입니다.
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 검색어로 필터링된 항목들을 가져오는 코드입니다.
  const filteredItems = schedules.filter((item) => {
    return (
      item.counselor.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.item.toLowerCase().includes(searchTermItem.toLowerCase()) &&
      item.consultationTime
        .toLowerCase()
        .includes(searchTermTime.toLowerCase()) &&
      new Date(item.consultationDate)
        .toLocaleDateString()
        .includes(searchTermDate.toLowerCase())
    );
  });

  // 현재 페이지에 따라 표시할 항목들을 가져오는 코드입니다.
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수를 계산합니다.
  const totalPages = Math.ceil(filteredItems.length / perPage);

  // 중앙 기준으로 표시할 페이지 범위를 계산합니다.
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // startPage를 재조정합니다.
  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  // 페이지 번호 배열을 생성합니다.
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 상담 항목 옵션
  const itemOptions = ["Consulting Services", "상담항목2", "상담항목3"]; // 사용자가 직접 입력

  // 상담원 옵션
  const dateOptions = ["상담원1", "상담원2", "상담원3"]; // 사용자가 직접 입력

  // 상담 시간 옵션
  const timeOptions = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ]; // 사용자가 직접 입력

  // JSX를 반환합니다.
  return (
    <div>
      <h1 className="title">상담 시간표 조회</h1>
      <div className="searchContainer">
        <select onChange={handleSearchItem}>
          <option value="">상담 항목 선택</option>
          {itemOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select onChange={handleSearchTime}>
          <option value="">- : --</option>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="상담원 이름 검색"
          value={searchTerm}
          onChange={handleSearch}
          className="searchInput"
        />
      </div>

      <table className="counseling-table">
        <thead className="table-header">
          <tr>
            <th>분류</th>
            <th>상담원</th>
            <th>상담 항목</th>
            <th>상담 시간</th>
            <th>상담 일자</th>
            <th>등록 일자</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.counselor}</td>
              <td>{item.item}</td>
              <td>{item.consultationTime}</td>
              <td>{new Date(item.consultationDate).toLocaleDateString()}</td>
              <td>{new Date(item.creationDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btnBox">
        <div className="paginationButtons">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            이전
          </button>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => handlePageClick(number)}>
              {number}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationSchedule;
