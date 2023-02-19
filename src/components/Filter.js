import React, { useState } from "react";

const Filter = ({ setData, allUsers, setCurrentPage }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last} ${user.email}`
        .toLowerCase()
        .includes(value)
    );
    setData(filteredUsers);
    setSearch(value);
    setCurrentPage(1);
  };

  const resetFilter = () => {
    setSearch("");
    setData(allUsers);
    setCurrentPage(1);
  };

  return (
    <div>
      <input
        className="search-box"
        type="text"
        placeholder="Search users..."
        onChange={filteredUsers}
        value={search}
      ></input>
      <button
        type="button"
        className="btn btn-danger btn-sm ml-4"
        onClick={resetFilter}
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
