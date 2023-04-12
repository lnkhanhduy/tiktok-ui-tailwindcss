import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function AccountPreview() {
  return (
    <div className="p-5 w-[320px]">
      <div className="flex justify-between items-center">
        <img
          src="https://images.unsplash.com/photo-1681068420510-cb528c65d595?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
          alt=""
          className="w-11 h-11 rounded-[50%] object-cover"
        />
        <Button typeButton="primary small">Follow</Button>
      </div>
      <div className="mt-3 text-[#161823]">
        <p className="text-[18px] text-[#161823]">
          <strong>s2say2</strong>
          <FontAwesomeIcon icon={faCheckCircle} className="text-[18px] text-[#20d5ec] ml-1" />
        </p>
        <p className="text-[16px] opacity-[#161823bf]">Lê Nguyễn Khánh Duy</p>
        <p className="mt-[10px]">
          <strong>8.2M </strong>
          <span>Follower</span>
          <strong className="ml-5">8.2M </strong>
          <span>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
