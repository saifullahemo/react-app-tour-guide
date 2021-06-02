import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {

  const [readMore, setReadMore] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        
        <p>{ readMore ? info : `${info.substring(0, 200)} ...`} {/* if readmore is equal to info is true then show the 200 characters of index 0  */} 
         <button onClick={() => setReadMore(!readMore)}> {/* !readMore is false here to set the useState to be the opposite */}
           {readMore ? 'show less' : 'read more'} {/* show the text of button */}
         </button>
        </p>
        <button className='delete-btn' onClick = {() => 
        removeTour(id)}>
          not intereseted
          </button>
      </footer>
    </article>
  );
};

export default Tour;
