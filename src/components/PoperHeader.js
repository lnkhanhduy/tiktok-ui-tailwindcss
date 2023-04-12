import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PopperHeader({ title, onBack }) {
  return (
    <header className="relative h-[50px] -mt-2 flex-shrink-0">
      <button className="w-[50px] h-full bg-transparent cursor-pointer" onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-bold">{title}</h4>
    </header>
  );
}

PopperHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PopperHeader;
