import { NavLink } from 'react-router';

const MenuItem = ({ icon: Icon, label, address }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-2 text-gray-700 rounded-lg hover:bg-green-100 hover:text-green-800 transition-colors ${
          isActive ? 'bg-green-200 text-green-900 font-semibold' : ''
        }`
      }
    >
      <Icon className="w-5 h-5 mr-3" />
      <span>{label}</span>
    </NavLink>
  );
};

export default MenuItem;