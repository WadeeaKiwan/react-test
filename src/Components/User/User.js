import React from 'react';

const User = ({ user, user: { name, surname, email, gender, age, region, photo } }) => {
  const singleUser = () => {
    return (
      <div>
        <img src={photo} alt={name} />
        <h4>
          {name} {surname}
        </h4>
        <p>{email}</p>
        <p>{gender}</p>
        <p>{age}</p>
        <p>{region}</p>
      </div>
    );
  };

  const data = user ? singleUser() : null;
  return data;
};

export default User;
