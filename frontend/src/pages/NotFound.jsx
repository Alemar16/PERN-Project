import { Button } from '../components/ui';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Page Not Found</h1>
      <h3 className="text-2xl text-gray-100 mb-8">404</h3>
      <Link to="/">
        <Button>Go back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;
