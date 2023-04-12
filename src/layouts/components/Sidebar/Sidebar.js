import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '../../../components/Icons';
import SuggestedAccount from '../../../components/SuggestedAccount/SuggestedAccount';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';

function Sidebar() {
  return (
    <aside className="w-[356px] pt-5 pb-[26px] pl-4">
      <Menu>
        <MenuItem title="For You" to="/" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem title="Following" to="/following" icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem title="LIVE" to="/live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccount label="Suggested accounts" />
      <SuggestedAccount label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
