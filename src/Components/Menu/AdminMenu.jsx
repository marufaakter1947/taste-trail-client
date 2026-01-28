import { FaUsers, FaBook, FaStar, FaPlus, FaClipboardList } from 'react-icons/fa';
import MenuItem from './MenuItem';

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUsers} label="All Users" address="/dashboard/all-users" />
      <MenuItem 
  icon={FaClipboardList}
  label="Manage Recipes"
  address="/dashboard/admin-recipes"
/>
      <MenuItem icon={FaStar} label="Review Approvals" address="/dashboard/reviews" />
      <MenuItem icon={FaPlus} label="Add Recipe" address="/dashboard/add-recipe" />
    </>
  );
};

export default AdminMenu;