import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="navbar">
            <div class="navbar-start">
                <Link to="/" class="btn btn-ghost normal-case text-xl">To-Do-App</Link>
            </div>
            <div class="navbar-end">
                {user ?
                    <button onClick={() => { signOut(auth) }} class="btn btn-primary btn-sm mr-5">Log Out</button> : <Link to="/login" class="btn btn-primary btn-sm mr-5">Login</Link>}
                <label for="homeDashboard" class="btn btn-primary btn-sm drawer-button lg:hidden">
                    Dashboard</label>
            </div>
        </div>
    );
};

export default Header;