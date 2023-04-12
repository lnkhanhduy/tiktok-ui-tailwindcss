import PropTypes from 'prop-types';
import Button from './Button';

function MenuItem({ data, onClick }) {
  const typeBtn = 'menu-item ' + data.separate;
  return (
    <Button typeButton={typeBtn} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
