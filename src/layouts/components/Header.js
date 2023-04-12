import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCoins,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLanguage,
  faPlus,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '../../components/Button';
import PopperMenu from '../../components/PopperMenu';
import Image from '../../components/Image';
import Search from './Search';
import { Link } from 'react-router-dom';
import { UploadIcon, MessageIcon, InboxIcon } from '../../components/Icons';

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'en', title: 'English' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

function Header() {
  const currentUser = false;

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View Profile',
      to: '/@duy',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: 'separate',
    },
  ];

  return (
    <header className="z-10 w-full h-[60px] shadow-[0_1px_1px_rgba(0,0,0,0.12)] flex justify-center fixed top-0 left-0 bg-white">
      <div className="h-full w-[1150px] flex items-center justify-between px-6">
        <Link to="/">
          <img className="" src={images.logo} alt="Tik tok" />
        </Link>

        {/* search */}
        <Search />

        <div className="flex items-center">
          {currentUser ? (
            <>
              <Tippy trigger="click" content="Upload video" placement="bottom">
                <button className="text-[22px] text-[#161823] bg-transparent py-1 px-3">
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy trigger="click" content="Message" placement="bottom">
                <button className="text-[22px] text-[#161823] bg-transparent py-1 px-3">
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy trigger="click" content="Inbox" placement="bottom">
                <button className="text-[22px] text-[#161823] bg-transparent py-1 px-3 relative">
                  <InboxIcon />
                  <span className="absolute -top-[3px] right-0 text-[14px] font-[600] rounded-[10px] text-white bg-[#fe2c55] px-[6px] py-0">
                    12
                  </span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button typeButton="btn-upload small" leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Upload
              </Button>
              <Button typeButton="primary small">Log in</Button>
            </>
          )}

          <PopperMenu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className="w-[32px] h-[32px] object-cover rounded-[50%] ml-4 cursor-pointer"
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="avt"
              />
            ) : (
              <button className="text-[20px]] ml-7 bg-transparent py-[4px] px-[8px]">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </PopperMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
