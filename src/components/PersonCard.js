import React from "react";

const PersonCard = ({ person }) => {
  const { name, profile_path: profilePath } = person;
  const profileImage = `https://image.tmdb.org/t/p/w300${profilePath}`;

  return (
    <>
      {profileImage ? (
        <div className="card">
          <img src={profileImage} className="card-img-top" alt={name} />
          <div className="card-body">{name}</div>
        </div>
      ) : (
        <div className="filler-poster"></div>
      )}
    </>
  );
};

export default PersonCard;
