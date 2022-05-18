import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="homeDashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-center text-3xl text-neutral p-2'>Welcome to your To-Do-Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="homeDashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">

                    <li><NavLink to="/">My Tasks</NavLink></li>
                    <li><NavLink to="/addtasks">Add Tasks</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Home;