import React from "react";
import Card from "./Card";

const Cards = ({ data, loading, error }) => {
  loading && <div>A moment please...</div>;
  error && (
    <div>{`There was an error while fetching the data ${error.message}`}</div>
  );

  return (
    <ul className="userlist">
      {data &&
        data.map(({ login, name, email, picture, location }) => (
          <Card
            key={login.uuid}
            img={picture.thumbnail}
            first={name.first}
            last={name.last}
            email={email}
            city={location.city}
            country={location.country}
          />
        ))}
    </ul>
  );
};

export default Cards;
