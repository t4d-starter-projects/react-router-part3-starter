import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useQueryParams } from '../hooks/useQueryParams';

function sortCars(cars, sortCol) {

  const sortedCars = [...cars];

  return sortedCars.sort((carA, carB) => {

    if (carA[sortCol] < carB[sortCol]) {
      return -1;
    } else if (carA[sortCol] > carB[sortCol]) {
      return 1;
    } else {
      return 0;
    }

  });


}

export function Cars() {

  const [cars, setCars] = useState([]);

  const queryParams = useQueryParams();

  const sortCol = queryParams.get('sort') ?? 'make';

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
            <th><Link to="?sort=make">Make</Link></th>
            <th><Link to="?sort=model">Model</Link></th>
            <th><Link to="?sort=year">Year</Link></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortCars(cars, sortCol).map(car => <tr key={car.carId}>
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