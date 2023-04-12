import PropTypes from 'prop-types';

function Popper({ children }) {
  return (
    <div className="flex flex-col w-full max-h-header-popper-max-height min-h-[100px] rounded-[8px] shadow-[0_2px_12px_rgba(0,0,0,0.12)] pt-2 pb-2">
      {children}
    </div>
  );
}

Popper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Popper;
