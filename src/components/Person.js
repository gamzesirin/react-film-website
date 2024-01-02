import React, { useEffect, useState } from "react";
import PersonCard from "./PersonCard";

const Person = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      
      const apiKey = "4f06c11e878d012468e56b8bbf1db704";

      
      const apiUrl = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const peopleData = data.results;
      setPeople(peopleData);
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div className="container ">
      <h1>Popüler Kişiler</h1>
      <div className="row flex-flex">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default Person;
