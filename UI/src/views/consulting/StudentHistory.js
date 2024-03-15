import React, { useEffect, useState } from "react";
import SearchFilters from "./components/SearchFilters";
import Pagination from "./components/Pagenation";

const StudentHistory = () => {
  const [history, setshistory] = useState([]); // 상담 항목 데이터를 저장할 상태 변수
  const [searchTerm, setSearchTerm] = useState(""); // 검색어를 저장할 상태 변수
  const [searchTermItem, setSearchTermItem] = useState(""); // 상담 항목 검색어를 저장할 상태 변수
  const [searchTermDate, setSearchTermDate] = useState(""); // 상담원 이름 검색어를 저장할 상태 변수
  const [searchTermTime, setSearchTermTime] = useState(""); // 상담 시간 검색어를 저장할 상태 변수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 저장할 상태 변수
  const [perPage] = useState(10); // 한 페이지당 표시할 항목 수

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8181/cbb/consulting/schedules`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setshistory(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchItem = (event) => {
    setSearchTermItem(event.target.value);
  };

  const handleSearchTime = (event) => {
    setSearchTermTime(event.target.value);
  };

  const handleSearchDate = (event) => {
    setSearchTermDate(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // 검색어로 필터링된 항목들을 가져오는 함수입니다.
  const filteredItems = history.filter((item) => {
    return (
      item.counselor.toLowerCase().includes(searchTerm.toLowerCase()) &&
      item.item.toLowerCase().includes(searchTermItem.toLowerCase()) &&
      item.consultationTime.includes(searchTermTime.toLowerCase()) &&
      item.consultationDate.includes(searchTermDate.toLowerCase())
    );
  });

  // 페이지 번호를 클릭했을 때 해당 페이지로 이동하는 함수입니다.
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 따라 표시할 항목들을 가져오는 코드입니다.
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  // 총 페이지 수를 계산합니다.
  const totalPages = Math.ceil(filteredItems.length / perPage);

  return (
    <div>
      <h1 className="title">학생 상담 종합 이력</h1>
      <SearchFilters
        itemOptions={["Certified Consultant", "상담항목2", "상담항목3"]}
        timeOptions={[
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
        ]}
        handleSearchItem={handleSearchItem}
        handleSearchDate={handleSearchDate}
        handleSearchTime={handleSearchTime}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <table className="history-table">
        <thead className="table-header">
          <tr>
            <th>유형</th>
            <th>상담원</th>
            <th>상담 항목</th>
            <th>학생</th>
            <th>상담일</th>
            <th>내용</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.counselor}</td>
              <td>{item.item}</td>
              <td>{item.consultationTime}</td>
              <td>{item.consultationDate.slice(0, 10)}</td>
              <td>{item.creationDate.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageClick}
      />
    </div>
  );
};

export default StudentHistory;
