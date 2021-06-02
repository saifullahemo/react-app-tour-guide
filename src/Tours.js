import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
  <section>
    <div className='title'>
    <h2>ours tours</h2>
    <div className= 'underline'></div>
    </div>
    <div>
      {tours.map((tour) =>{
        return <Tour key={tour.id} {...tour} removeTour = {removeTour}></Tour> //{...tour} uses to access every property in the object
      }
      )}
    </div>
  </section>
  );
};

export default Tours;
