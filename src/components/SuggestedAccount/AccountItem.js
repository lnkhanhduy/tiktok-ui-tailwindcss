import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import Popper from '../Popper';
import AccountPreview from './AccountPreview';

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Popper>
          <div>
            <AccountPreview />
          </div>
        </Popper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
        <div className="flex p-2 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
            alt=""
            className="w-8 h-8 rounded-[50%] object-cover m-auto"
          />
          <div className="flex-1 ml-3">
            <p className="text-[16px] text-[#161823]">
              <strong className="leading-[1]">s2say2</strong>
              <FontAwesomeIcon icon={faCheckCircle} className="text-[14px] text-[#20d5ec] ml-1" />
            </p>
            <p className="text-[12px] opacity-[#161823bf]">Lê Nguyễn Khánh Duy</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
