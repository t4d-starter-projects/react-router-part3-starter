import { useState, useEffect } from 'react';
import axios from 'axios';

export function CarsSummary() {

  const [cars, setCars] = useState([]);

  useEffect(() => {

    axios.get(`/api/cars`).then(response => {
      setCars(response.data);
    });

  }, []);

  return (
    <div>
      <h3>Cars Summary</h3>
      <div>
        Cars Count: {cars.length}
      </div>
    </div>
  );

}