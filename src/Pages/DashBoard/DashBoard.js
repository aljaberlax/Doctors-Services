import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmins from '../../Hooks/UseAdmins';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmins(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-2xl font-bold text-purple-500'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li>{admin && <Link to='/dashboard/users'>All User's</Link>}</li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;