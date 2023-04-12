import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

function SuggestedAccount({ label }) {
  return (
    <div className="border-t-[1px] border-[#ccc]">
      <p className="text-[14px] p-2 font-[600]">{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className="text-[14px] text-[#fe2c55] p-2 font-[700] cursor-pointer">See all</p>
    </div>
  );
}

SuggestedAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
