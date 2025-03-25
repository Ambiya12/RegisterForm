import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4">
                <ul className="flex justify-center space-x-8 py-4">
                    <li>
                        <Link to="/home" className="text-white ">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="text-white ">Profile</Link>
                    </li>
                    <li>
                        <Link to="/register" className="bg-indigo-600 text-white px-4 py-2 rounded">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;