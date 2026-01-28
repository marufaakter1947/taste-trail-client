import { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole.jsx';
import logo from '../assets/logo.png';

import { GrLogout } from 'react-icons/gr';
import { FcSettings } from 'react-icons/fc';
import { AiOutlineBars } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';

// Role Menus
import AdminMenu from './Menu/AdminMenu';
import UserMenu from './Menu/UserMenu';
import MenuItem from './Menu/MenuItem.jsx';
import { FaPlusCircle, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  const { user, logOut, loading } = useAuth();
  const role = useRole(user?.email);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => setActive(!isActive);

  if (loading) return null;

  return (
    <>
      {/* Mobile navbar */}
      <div className="bg-green-50 flex justify-between md:hidden">
        <Link to="/" className="p-4">
          <img src={logo} alt="logo" width="90" />
        </Link>

        <button onClick={handleToggle} className="p-4 focus:outline-none">
          <AiOutlineBars className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-50 md:fixed flex flex-col justify-between bg-green-50 w-64 px-3 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? '-translate-x-full' : 'translate-x-0'
        } md:translate-x-0 transition duration-200`}
      >
        {/* Top */}
        <div>
          <Link to="/" className="flex items-center gap-1 mb-6">
            <img src={logo} alt="logo" width="30" />
            <span className="hidden text-2xl md:block font-bold text-green-800">
              TasteTrail
            </span>
          </Link>

          <nav className="mt-6 space-y-1">
            {/* Common Dashboard */}
            <MenuItem icon={MdDashboard} label="Dashboard" address="/dashboard" />

            {/* Role Based Menus */}
            {role === 'admin' && <AdminMenu />}
            {role === 'user' && <UserMenu />}

            {/* Extra for admin */}
            {role === 'admin' && (
              <>
                
                <MenuItem
                  icon={FaClipboardList}
                  label="All Recipes"
                  address="/dashboard/recipes"
                />
              </>
            )}
          </nav>
        </div>

        {/* Bottom */}
        <div>
          <hr className="my-3" />
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard/profile" />

          <button
            onClick={logOut}
            className="flex items-center w-full px-4 py-2 mt-3 text-gray-600 hover:bg-gray-300 rounded-md"
          >
            <GrLogout className="w-5 h-5" />
            <span className="ml-4">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;