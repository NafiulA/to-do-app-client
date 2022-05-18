import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="homeDashboard" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2>Welcome to your To-Do-Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="homeDashboard" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

                    <li><NavLink to="/">My Tasks</NavLink></li>
                    <li><NavLink to="/addtasks">Add Tasks</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Home;