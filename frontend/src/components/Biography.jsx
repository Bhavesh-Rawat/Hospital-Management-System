import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>

  As modern developers, we aim to simplify 
 life by creating user-friendly software that automates tasks
, prioritizes accessibility, and ensures reliability and security.
 Through intuitive design and continuous improvement, 
 our goal is to make people's work easier and more efficient.
          </p>
          <h2>We are all in 2024!</h2>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
           
Our project simplifies booking appointments with healthcare professionals.
 Users input their medical needs, and we suggest suitable doctors.
  They select a convenient appointment slot, receive a confirmation
    Behind the scenes, our system seamlessly 
   manages scheduling by integrating with doctors' schedules. This 
   automation streamlines healthcare access, benefiting both patients and providers.
          </p>
          <p>Let's get going</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
