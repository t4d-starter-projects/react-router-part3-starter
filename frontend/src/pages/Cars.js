import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {

    axios.get('/api/cars').then(response => {
      setCars(response.data);
    });

  }, []);

  return (
    <div>
      <h2>Cars</h2>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => <tr key={car.carId}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td><Link to={`/cars/${encodeURIComponent(car.carId)}`}>View</Link></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );

}