import { FaUsers, FaBook, FaStar, FaPlus } from 'react-icons/fa';
import MenuItem from './MenuItem';

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUsers} label="All Users" address="/dashboard/all-users" />
      <MenuItem icon={FaBook} label="Manage Recipes" address="/dashboard/recipes" />
      <MenuItem icon={FaStar} label="Review Approvals" address="/dashboard/reviews" />
      <MenuItem icon={FaPlus} label="Add Recipe" address="/dashboard/add-recipe" />
    </>
  );
};

export default AdminMenu;