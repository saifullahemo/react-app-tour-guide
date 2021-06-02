import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true); // state loading to load the page for default use true
  const [tours, setTours] = useState([]); // default value is empty
  
  const removeTour = (id) =>{
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => { //using async funtion to fetch data from url
    setLoading(true); // setLoading as true value
    
    console.log(tours);
    
    try {
      const response = await fetch(url); 
      const tours = await response.json(); // this is going to show list of tours
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false)
      console.log(error);
      
    }

  }
  useEffect (() => { // 
    fetchTours();
  }, []);

  if(loading) { //if loading is true 
    return (<main>
      <Loading />  {/* then return Loading component */}

    </main>
    );
  }
  if(tours.length === 0){
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className='btn' onClick = {fetchTours}>refresh</button>
        </div>
      </main>
    )
  }
  return ( //by default return tours component
    <main>
      <Tours tours = {tours} removeTour ={removeTour}/>
    </main>
  );
}

export default App
