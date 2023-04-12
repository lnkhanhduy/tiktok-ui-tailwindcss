import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ title, to, icon, activeIcon }) {
  return (
    <NavLink
      className="flex text-[18px] font-[700] items-center p-2 hover:bg-sidebar-menu_item-bg-hover rounded transition ease-in-out delay-150 text-[#161823]"
      to={to}
    >
      <span className="icon">{icon}</span>
      <span className="active-icon">{activeIcon}</span>
      <span className="ml-[10px]">{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
