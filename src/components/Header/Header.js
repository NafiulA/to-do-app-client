import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="navbar">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost normal-case text-xl">To-Do-App</Link>
            </div>
            <div className="navbar-end">
                {user ?
                    <button onClick={() => { signOut(auth) }} className="btn btn-primary btn-sm mr-5">Log Out</button> : <Link to="/login" className="btn btn-primary btn-sm mr-5">Login</Link>}
                <label htmlFor="homeDashboard" className="btn btn-primary btn-sm drawer-button lg:hidden">
                    Dashboard</label>
            </div>
        </div>
    );
};

export default Header;