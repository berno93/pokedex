import { Link, useLocation } from 'react-router-dom';

/**
 * This is a React component that displays a 404 error message with the current page path and a link to
 * the homepage.
 * @returns A functional component named `NoMatch` is being returned. It displays a message "404" along
 * with the current page's path using `useLocation` hook. It also provides a button to navigate back to
 * the home page using `Link` component from `react-router-dom`.
 */
export default function NoMatch() {
  let location = useLocation();

  return (
    <center>
      <h2>404</h2>
      <code>Page : {location.pathname}</code>
      <br />

      <Link to="/" className="btn btn-primary">
        Retour sur la page princpale
      </Link>
    </center>
  );
}
