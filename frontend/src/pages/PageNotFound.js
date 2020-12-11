import { Link } from 'react-router-dom';

export function PageNotFound() {

  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );

}