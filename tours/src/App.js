import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length === 0) {
    return(
      <div className="title">
        <h4>no tours left</h4>
        <button className="btn" onClick={fetchTours}>Reset</button>
      </div>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
