import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './Image';
import { Link } from 'react-router-dom';

function AccountItem({ data }) {
  return (
    <Link
      to={`/@${data.nickname}`}
      className="flex items-center cursor-pointer py-[6px] px-[16px] hover:bg-header-account-hover"
    >
      <Image className="w-[40px] h-[40px] rounded-[50%] object-cover" src={data.avatar} alt={data.full_name} />
      <div className="flex-1 ml-3">
        <h4 className="text-[14px] font-[500]">
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon className="ml-[6px] text-[12px] text-[rgb(32,213,236)]" icon={faCheckCircle} />
          )}
        </h4>
        <span className="text-[14px] text-[rgba(22,24,25,0.5)]">{data.nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.protoTypes = {
  data: PropTypes.object.isRequired,
};

export default AccountItem;
