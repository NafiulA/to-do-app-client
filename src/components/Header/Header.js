import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <Link to="/" class="btn btn-ghost normal-case text-xl">To-Do-App</Link>
            </div>
            <div class="navbar-end">
                <Link to="/login" class="btn btn-primary btn-sm mr-5">Login</Link>
                <label for="homeDashboard" class="btn btn-primary btn-sm drawer-button lg:hidden">
                    Dashboard</label>
            </div>
        </div>
    );
};

export default Header;