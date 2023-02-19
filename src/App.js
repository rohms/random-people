import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=100"
        );
        setData(response.data.results);
        setAllUsers(response.data.results);
        setError(null);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {};
  }, []);

  // getting current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // changing the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h2>Search Random Users</h2>
      <div>
        <Filter
          data={data}
          allUsers={allUsers}
          setData={setData}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Cards
        data={currentCards}
        loading={loading}
        error={error}
        allUsers={allUsers}
      />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
