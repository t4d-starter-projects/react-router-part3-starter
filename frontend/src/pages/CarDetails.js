import { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

export function CarDetails() {

  const { carId } = useParams();

  const history = useHistory();

  const navToCars = () => {
    history.push('/cars');
  };

  const [car, setCar] = useState([]);

  useEffect(() => {

    axios.get(`/api/cars/${encodeURIComponent(carId)}`).then(response => {
      setCar(response.data);
    });

  }, [carId]);

  return (
    <div>
      <h2>Car Details</h2>
      <ul>
        <li>Id: {car.carId}</li>
        <li>Make: {car.make}</li>
        <li>Model: {car.model}</li>
        <li>Year: {car.year}</li>
        <li>Color: {car.color}</li>
        <li>Price: {car.price}</li>
      </ul>
      <Link to="/cars">Return to Cars Table</Link>
      <button type="button" onClick={navToCars}>Go to Cars</button>
    </div>
  );

}