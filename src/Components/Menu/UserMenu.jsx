import { FaBook, FaCalendarCheck, FaStar } from 'react-icons/fa';
import MenuItem from './MenuItem';

const UserMenu = () => {
  return (
    <>
      <MenuItem icon={FaBook} label="Browse Recipes" address="/dashboard/recipes" />
      <MenuItem icon={FaCalendarCheck} label="Weekly Planner" address="/dashboard/meal-planner" />
      <MenuItem icon={FaStar} label="My Reviews" address="/dashboard/my-reviews" />
    </>
  );
};

export default UserMenu;